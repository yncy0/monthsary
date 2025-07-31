import type { Database } from "~/types/database.types";

export async function useFetchDimDate() {
  const client = useSupabaseClient<Database>();

  const { data, error } = await client
    .from("dim_date")
    .select("*")
    .order("date", { ascending: true });

  if (error) throw error;

  return data;
}

