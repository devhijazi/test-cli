import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export function useGoBack(): () => void {
  const history = useHistory();

  const goBack = useCallback(() => {
    (history as any).goBack();
  }, [history]);

  return goBack;
}
