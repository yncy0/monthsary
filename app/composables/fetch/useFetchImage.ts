import type { Database } from "~/types/database.types";

export async function useFetchImage() {
  const client = useSupabaseClient<Database>();

  const { data, error } = await client
    .from("images")
    .select("*")
    .order("id", { ascending: true });

  if (error) throw error;

  return data;
}

export async function useFetchImageWithDate(date: string) {
  const client = useSupabaseClient<Database>();

  const { data, error } = await client
    .from("images")
    .select("*")
    .eq("date_id", date)
    .order("date_id", { ascending: true });

  if (error) throw error;

  return data;
}
