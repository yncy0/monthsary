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
