export interface Results<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
  total_pages: number;
}
