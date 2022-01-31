import { ONE_DAY_IN_MS, ONE_MONTH_IN_MS } from './constants';

interface ParseDefaultValueReturnData {
  days: number;
  months: number;
}

export function parseDefaultValue(
  value: unknown,
): ParseDefaultValueReturnData | null {
  const time = Number(value);

  if (Number.isNaN(time)) {
    return null;
  }

  const monthsPot = Math.floor(time / ONE_MONTH_IN_MS);

  const months: number = monthsPot >= 0 ? monthsPot : 0;
  const days = Math.floor((time - ONE_MONTH_IN_MS * months) / ONE_DAY_IN_MS);

  return {
    months,
    days,
  };
}
