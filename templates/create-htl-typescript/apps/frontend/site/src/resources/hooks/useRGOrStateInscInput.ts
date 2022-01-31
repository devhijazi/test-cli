import { useCallback, useState } from 'react';
import type {
  InputState,
  BeforeMaskedStateChangeStates,
} from 'react-input-mask';

const RG_MASK = '9.999.999';
const STATE_MASK = '99.999.9999-9';

const RG_MASK_LENGTH = RG_MASK.length;

interface UseRGOrStateInscInputManager {
  mask: string;
  beforeMaskedStateChange(states: BeforeMaskedStateChangeStates): InputState;
}

export function useRGOrStateInscInput(): UseRGOrStateInscInputManager {
  const [mask, updateMask] = useState(RG_MASK);

  const beforeMaskedStateChange = useCallback(
    ({
      previousState,
      nextState,
    }: BeforeMaskedStateChangeStates): InputState => {
      if (nextState.selection) {
        const { start, end } = nextState.selection;

        if (
          previousState &&
          end <= RG_MASK_LENGTH &&
          /^[0-9]{2}\./.test(previousState.value)
        ) {
          updateMask(STATE_MASK);
        }

        if (
          previousState &&
          previousState.selection &&
          previousState.selection.end === RG_MASK_LENGTH &&
          start === end &&
          start === RG_MASK_LENGTH &&
          (nextState as any).enteredString
        ) {
          setTimeout(() => {
            updateMask(STATE_MASK);
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
