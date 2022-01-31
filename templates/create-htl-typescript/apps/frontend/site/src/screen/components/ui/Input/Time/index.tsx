import { mergeClassNames } from '@hitechline/reactools';
import { useField } from '@unform/core';
import { duration } from 'moment';
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  HTMLAttributes,
  useMemo,
} from 'react';
import { FiX, FiMinus, FiPlus } from 'react-icons/fi';

import { Container, Button, PickerModal } from './styles';
import { getTime } from './utils/getTime';
import { parseDefaultValue } from './utils/parseDefaultValue';

import { generateRandomString } from '@modules/utils/generateRandomString';
import type { ModalHandles } from '@screen/components/forward/Modal';

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string;
  label?: string;
}

export function TimeInput({
  name,
  label,
  placeholder,
  className,
  ...rest
}: Props): JSX.Element {
  const modalRef = useRef<ModalHandles>(null);
  const { error, fieldName, defaultValue, registerField } = useField(name);

  const [[months, days], updateTime] = useState([0, 0]);

  const id = useMemo(() => generateRandomString(), []);

  const title = useMemo(() => placeholder || 'Insira o tempo', [placeholder]);

  const currentTime = useMemo(() => getTime({ months, days }), [days, months]);

  const open = useCallback(() => {
    modalRef.current?.open();
  }, []);

  const close = useCallback(() => {
    modalRef.current?.close();
  }, []);

  const handlePicker = useCallback(
    (time: 'days' | 'months', type: 'add' | 'remove') => {
      const parse = (value: number): number => (value >= 0 ? value : 0);

      let value = 0;

      switch (type) {
        case 'add':
          value = 1;
          break;
        case 'remove':
          value = -1;
          break;
        default:
      }

      switch (time) {
        case 'months':
          updateTime(([currentMonths, currentDays]) => [
            parse(currentMonths + value),
            currentDays,
          ]);
          break;
        case 'days':
          updateTime(([currentMonths, currentDays]) => [
            currentMonths,
            parse(currentDays + value),
          ]);
          break;
        default:
      }
    },
    [],
  );

  useEffect(() => {
    const value = parseDefaultValue(defaultValue);

    if (!value) {
      return;
    }

    updateTime(() => [value.months, value.days]);
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => currentTime,
    });
  }, [fieldName, currentTime, registerField]);

  return (
    <>
      <PickerModal ref={modalRef}>
        <button type="button" className="close" onClick={close}>
          <FiX />
        </button>

        <section>
          <div>
            <button
              type="button"
              className="add"
              onClick={() => handlePicker('months', 'add')}
            >
              <FiPlus />
            </button>

            <span className="value">{months}</span>
            <span className="title">Meses</span>

            <button
              type="button"
              className="remove"
              onClick={() => handlePicker('months', 'remove')}
            >
              <FiMinus />
            </button>
          </div>
          <div>
            <button
              type="button"
              className="add"
              onClick={() => handlePicker('days', 'add')}
            >
              <FiPlus />
            </button>

            <span className="value">{days}</span>
            <span className="title">Dias</span>

            <button
              type="button"
              className="remove"
              onClick={() => handlePicker('days', 'remove')}
            >
              <FiMinus />
            </button>
          </div>
        </section>
      </PickerModal>

      <Container
        {...rest}
        className={mergeClassNames(className, {
          error: Boolean(error),
        })}
      >
        {label && <label htmlFor={id}>{label}</label>}

        <Button id={id} type="button" onClick={open}>
          {currentTime > 0
            ? duration(currentTime).format('M [M] d [D]', {
                trim: false,
              })
            : title}
        </Button>
      </Container>
    </>
  );
}
