import type { Database } from "~/types/database.types";

export async function useFetchRoadmap() {
  const client = useSupabaseClient<Database>();

  const { data, error } = await client
    .from("roadmap")
    .select(`*, images (id, image_url, unique_id)`)
    .order("index", { ascending: true });

  if (error) throw error;

  return data;
}
