export function useFetchDimDateFilter(date: string[]) {
  return useFetch(`/api/dim_date?filter=${date}`);
}
