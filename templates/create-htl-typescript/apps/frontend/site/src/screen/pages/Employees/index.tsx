import { useAsync } from '@hitechline/reactools';
import { useEffect, useContext, useCallback, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useHistory } from 'react-router-dom';

import { Card } from './components/Card';
import { Container, NoMoreItems } from './styles';

import { api } from '@modules/services/api';
import { apply } from '@resources/cases/apply';
import { Logged } from '@resources/cases/Logged';
import { HeroSearchContext } from '@screen/components/ui/HeroSearch';
import { Spinner } from '@screen/components/ui/Spinner';
import {
  TopSearchLayout,
  TopSearchLayoutContext,
} from '@screen/layouts/TopSearchLayout';

export const Employees = apply(
  (): JSX.Element => {
    const history = useHistory();

    const { search } = useContext(HeroSearchContext);
    const { configure } = useContext(TopSearchLayoutContext);

    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [inReset, setInReset] = useState(false);
    const [employees, setEmployees] = useState<EmployeeHealthy[]>([]);

    const goToCreate = useCallback(() => {
      history.push('/employees/create');
    }, [history]);

    const addMoreEmployees = useCallback((moreEmployees: EmployeeHealthy[]) => {
      setEmployees(currentEmployees => [...currentEmployees, ...moreEmployees]);
    }, []);

    const { loading } = useAsync(async () => {
      const { data: apiData } = await api.get<GetEmployeesHttpData>(
        'employees/list',
      );

      setPages(apiData.pages);
      addMoreEmployees(apiData.items);
    });

    const fetchMoreEmployees = useCallback(async () => {
      if (currentPage === pages) {
        return;
      }

      const getPage = currentPage + 1;
      const {
        data: { items },
      } = await api.get<GetEmployeesHttpData>(
        `employees/list?page=${getPage}&search=${search}`,
      );

      setCurrentPage(getPage);
      addMoreEmployees(items);
    }, [pages, search, currentPage, addMoreEmployees]);

    const reset = useCallback(async () => {
      try {
        setInReset(true);
        setCurrentPage(1);
        setEmployees([]);

        const { data: apiData } = await api.get<GetEmployeesHttpData>(
          `employees/list?search=${search}`,
        );

        setPages(apiData.pages);
        addMoreEmployees(apiData.items);
      } finally {
        setInReset(false);
      }
    }, [search, addMoreEmployees]);

    useEffect(() => {
      if (loading) {
        return;
      }

      reset();
    }, [loading, reset]);

    useEffect(() => {
      configure({
        title: 'Usuários do sistema',
        placeholder: 'Nome do usuário ou e-mail',

        buttons: [
          {
            icon: FiPlus,
            handler: goToCreate,
          },
        ],
      });
    }, [configure, goToCreate]);

    return (
      <Container>
        {loading || inReset ? (
          <Spinner size="40px" />
        ) : (
          <InfiniteScroll
            dataLength={employees.length}
            next={fetchMoreEmployees}
            hasMore={currentPage < pages}
            loader={<Spinner size="30px" />}
            className="items"
            endMessage={<NoMoreItems>Isso é tudo :)</NoMoreItems>}
          >
            {employees.map(({ id, full_name, email }) => (
              <Card
                key={full_name}
                name={full_name}
                email={email}
                href={`employees/${id}`}
              />
            ))}
          </InfiniteScroll>
        )}
      </Container>
    );
  },
  {
    layout: TopSearchLayout,
    cases: [Logged],
  },
);
