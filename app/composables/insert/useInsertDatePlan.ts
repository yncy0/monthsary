export async function useInsertDatePlan(
  moodSpectrum: string,
  place: string,
  foodEstablishment: string,
  meetingTime: string,
) {
  const { datePlan } = await $fetch(
    `/api/date_plan?moodSpectrum=${moodSpectrum}&place=${place}&foodEstablishment=${foodEstablishment}&meetingTimes=${meetingTime}`,
  );

  return datePlan
}
