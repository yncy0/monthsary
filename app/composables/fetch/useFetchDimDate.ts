import type { Database } from "~/types/database.types";

export async function useFetchDimDate() {
  const client = useSupabaseClient<Database>();

  const { data, error } = await client
    .from("dim_date")
    .select("*")
    .order("date", { ascending: false });

  if (error) throw error;

  return data;
}

export async function useFetchDimDateFilter(date: string[]) {
  const client = useSupabaseClient<Database>();

  const { data, error } = await client
    .from("dim_date")
    .select("*")
    .neq("date", date)
    .order("date", { ascending: false });

  if (error) throw error;

  return data;
}
