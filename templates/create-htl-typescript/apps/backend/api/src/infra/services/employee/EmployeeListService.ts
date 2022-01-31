import { Like } from 'typeorm';

import { EmployeeRepository } from '@core/database/models/Employee';
import { PaginationHelper } from '@infra/helpers/PaginationHelper';
import { ParserHelper } from '@infra/helpers/ParserHelper';

export class EmployeeListService implements Service {
  async execute({
    search,
    page = 1,
    itemsPerPage = 10,
  }: EmployeeListData): Promise<EmployeeListReturnData> {
    const { items, ...paginatedData } = await PaginationHelper.paginate(
      EmployeeRepository.getRepository(),
      {
        page,
        itemsPerPage,
        fag: query => {
          if (search) {
            query.where([
              {
                email: Like(`%${search}%`),
              },
              {
                full_name: Like(`%${search}%`),
              },
            ]);
          }
        },
      },
    );

    return {
      ...paginatedData,
      items: items.map(ParserHelper.parseEmployee),
    };
  }
}
