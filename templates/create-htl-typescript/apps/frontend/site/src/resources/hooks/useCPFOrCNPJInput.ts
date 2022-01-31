import { useCallback, useState } from 'react';
import type {
  InputState,
  BeforeMaskedStateChangeStates,
} from 'react-input-mask';

const CPF_MASK = '999.999.999-99';
const CNPJ_MASK = '99.999.999/9999-99';

const CPF_MASK_LENGTH = CPF_MASK.length;

interface UseCPFOrCNPJInputManager {
  mask: string;
  beforeMaskedStateChange(states: BeforeMaskedStateChangeStates): InputState;
}

export function useCPFOrCNPJInput(): UseCPFOrCNPJInputManager {
  const [mask, updateMask] = useState(CPF_MASK);

  const beforeMaskedStateChange = useCallback(
    ({
      previousState,
      nextState,
    }: BeforeMaskedStateChangeStates): InputState => {
      if (nextState.selection) {
        const { start, end } = nextState.selection;

        if (
          previousState &&
          end <= CPF_MASK_LENGTH &&
          /^[0-9]{2}\./.test(previousState.value)
        ) {
          updateMask(CNPJ_MASK);
        }

        if (
          previousState &&
          previousState.selection &&
          previousState.selection.end === CPF_MASK_LENGTH &&
          start === end &&
          start === CPF_MASK_LENGTH &&
          (nextState as any).enteredString
        ) {
          setTimeout(() => {
            updateMask(CNPJ_MASK);
          }, 0);
        }
      }

      return nextState;
    },
    [],
  );

  return {
    mask,
    beforeMaskedStateChange,
  };
}
