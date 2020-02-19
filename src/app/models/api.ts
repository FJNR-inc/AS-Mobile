export interface IResponseApi<T> {
  count: number;
  next: any;
  previous: any;
  results: Array<T>;
}
