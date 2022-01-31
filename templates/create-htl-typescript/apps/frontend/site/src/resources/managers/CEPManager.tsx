import { useContext, useEffect, useCallback } from 'react';

import { getCep } from '@modules/services/cep';
import { useUI } from '@resources/hooks/useUI';
import { FormContext } from '@screen/components/forward/Form';

export function CEPManager({ children }: PropsWithChildren): JSX.Element {
  const { setLoading } = useUI();
  const { getUnformRef } = useContext(FormContext);

  const getInput = useCallback(
    (inputName: string): HTMLInputElement | null => {
      const input = getUnformRef().current?.getFieldRef(inputName);

      if (!input) {
        throw new Error(`Nenhum input com o nome "${inputName}" encontrado.`);
      }

      return input.current;
    },
    [getUnformRef],
  );

  const handleChange = useCallback(async () => {
    const form = getUnformRef();

    if (!form || !form.current) {
      throw new Error('Nenhum formulário foi provido.');
    }

    const value = form.current.getFieldValue('address.zip_code');

    if (!value || value.length < 8) {
      return;
    }

    getInput('address.zip_code')?.blur();

    setLoading(true);

    const cep = await getCep(value);

    if (!cep) {
      setLoading(false);
      return;
    }

    const inputs: [string, string?, boolean?][] = [
      ['address.city', cep.city],
      ['address.state', cep.state],
      ['address.zip_code', cep.cep, true],
      ['address.street', cep.street],
      ['address.neighborhood', cep.neighborhood],
    ];

    inputs.forEach(([inputName, inputValue, ignoreDisable]) => {
      const input = getInput(inputName);

      if (input && inputValue) {
        input.value = inputValue;
        form.current?.setFieldError(inputName, '');

        if (!ignoreDisable) {
          input.setAttribute('disabled', 'true');
        }
      }
    });

    setLoading(false);
  }, [getInput, getUnformRef, setLoading]);

  useEffect(() => {
    const CEPInput = getInput('address.zip_code');

    CEPInput?.addEventListener('input', handleChange);

    return () => {
      CEPInput?.removeEventListener('input', handleChange);
    };
  }, [getInput, handleChange, getUnformRef]);

  return <>{children}</>;
}
