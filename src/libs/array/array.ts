import { GroupBy } from './array.types';

export const groupBy = <T extends { [key: string]: any }>(target: string, array: T[]): GroupBy<T>[] =>
  array
    .reduce((acc, current) => (!acc.includes(current[target]) ? [...acc, current[target]] : acc), [] as string[])
    .map((item) => ({ target: item, children: array.filter((arrayItem) => item === arrayItem[target]) }));
