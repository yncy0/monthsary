export async function useFetchDimDateFilter(date: string[]) {
  const { dimDate } = await $fetch(`/api/dim_date?filter=${date}`);

  return dimDate;
}
