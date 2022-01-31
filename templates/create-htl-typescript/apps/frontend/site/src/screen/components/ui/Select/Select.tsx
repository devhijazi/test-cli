import {
  mergeClassNames,
  useOutClick,
  useForceUpdate,
} from '@hitechline/reactools';
import { useField } from '@unform/core';
import {
  useMemo,
  useState,
  useRef,
  useEffect,
  useCallback,
  ChangeEvent,
} from 'react';
import { GrSearch } from 'react-icons/gr';

import {
  Container,
  Content,
  Button,
  OptionsContainer,
  OptionsHeader,
  OptionsContent,
  EmptyOptions,
} from './styles';
import type { Props, SelectOption } from './types';

export function Select({
  name,
  title,
  className,
  options,
  onChange,
  icon: Icon,
  ...props
}: Props): JSX.Element {
  const forceUpdate = useForceUpdate();
  const selectRef = useRef<SelectOption>();

  const [search, setDefaultSearch] = useState('');
  const [optionsVisible, setOptionsVisible] = useState(false);

  const { error, fieldName, defaultValue, registerField } = useField(name);
  const {
    addListener,
    removeListener,
    ref: outClick,
  } = useOutClick<HTMLDivElement>();

  const currentOptions = useMemo(() => {
    if (!search) {
      return options;
    }

    const searchLowerCase = search.toLowerCase();

    return options.filter(({ label }) =>
      label.toLowerCase().includes(searchLowerCase),
    );
  }, [search, options]);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setDefaultSearch(event.target.value ?? '');
    },
    [],
  );

  // Options Container

  const openOptions = useCallback(() => {
    setTimeout(() => {
      setOptionsVisible(true);
    }, 0);
  }, []);

  const closeOptions = useCallback(() => {
    // Reset the search inserted
    setDefaultSearch('');

    setOptionsVisible(false);
  }, []);

  // Option Manager

  const getOptionByValue = useCallback(
    (value: any) =>
      options.find(({ value: currentValue }) => currentValue === value),
    [options],
  );

  const setValue = useCallback(
    (value: any, close = false) => {
      const option = getOptionByValue(value);

      if (!option) {
        return;
      }

      selectRef.current = { ...option };

      if (close) {
        closeOptions();
      }

      // Call before, because "onChange" can contains unhandled error
      forceUpdate();

      if (typeof onChange === 'function') {
        onChange(selectRef.current);
      }
    },
    [selectRef, onChange, forceUpdate, closeOptions, getOptionByValue],
  );

  useEffect(() => {
    setValue(defaultValue);
  }, [setValue, defaultValue]);

  useEffect(() => {
    registerField({
      path: 'current.value',
      ref: selectRef,
      name: fieldName,
    });
  }, [selectRef, fieldName, registerField]);

  useEffect(() => {
    addListener(closeOptions);

    return () => {
      removeListener(closeOptions);
    };
  }, [closeOptions, addListener, removeListener]);

  return (
    <Container
      {...props}
      className={mergeClassNames(className, {
        'error': Boolean(error),
        'visible': optionsVisible,
        'with-icon': Boolean(Icon),
      })}
    >
      <Content>
        {Icon && (
          <div className="icon">
            <Icon />
          </div>
        )}

        <Button
          type="button"
          onClick={optionsVisible ? closeOptions : openOptions}
        >
          {selectRef.current?.label ?? title}
        </Button>
      </Content>

      {optionsVisible && (
        <OptionsContainer ref={outClick}>
          <OptionsHeader>
            <GrSearch />

            <input
              type="text"
              placeholder="Pesquise aqui..."
              onChange={handleInputChange}
            />
          </OptionsHeader>

          <OptionsContent className="scrollbar-custom">
            {currentOptions.length ? (
              currentOptions.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setValue(value, true)}
                >
                  {label}
                </button>
              ))
            ) : (
              <EmptyOptions>Nenhuma opção encontrada!</EmptyOptions>
            )}
          </OptionsContent>
        </OptionsContainer>
      )}
    </Container>
  );
}
