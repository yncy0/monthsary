import type { Database } from "~/types/database.types.ts";

export type DatePlan = {
  moodSpectrum: string;
  place: string;
  foodEstablishment: string;
  meetingTime: string;
};

export async function useInsertDatePlan(
  moodSpectrum: string,
  place: string,
  foodEstablishment: string,
  meetingTime: string,
) {
  const client = useSupabaseClient<Database>();

  const { data, error } = await client
    .from("data_plan")
    .insert([
      {
        mood_spectrum: moodSpectrum,
        place: place,
        food_establishment: foodEstablishment,
        meeting_time: meetingTime,
      },
    ])
    .select();

  if (error) throw error;

  return { data };
}
