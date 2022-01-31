import { ONE_DAY_IN_MS, ONE_MONTH_IN_MS } from './constants';

interface GetTimeData {
  months: number;
  days: number;
}

export function getTime({ months, days }: GetTimeData): number {
  const monthsParsed = months * ONE_MONTH_IN_MS;
  const daysParsed = days * ONE_DAY_IN_MS;

  return monthsParsed + daysParsed;
}
