import type { Database } from "~/types/database.types";

/** 
 * Use to fetch data via ascending order at roadmap page.
 *
 * @returns {any[]} data - Data from the table based on the schema.
 */
export async function useFetchRoadmap() {
  const client = useSupabaseClient<Database>();

  const { data, error } = await client
    .from("roadmap")
    .select(`*, images (id, image_url, unique_id)`)
    .order("index", { ascending: true });

  if (error) throw error;

  return data;
}


/** 
 * Use to fetch data in the home page.
 *  
 * @param {string} range - Range of items that can be fetched
 *
 * @returns {any[]} data - Data from the table based on the schema.
 *
 * @example
 * const foo = useFetchRoadmapRange("4")
 */
export async function useFetchRoadmapRange(range: string) {
  const client = useSupabaseClient<Database>();

  const { data, error } = await client
    .from("roadmap")
    .select(`*, images (id, image_url, unique_id)`)
    .lte("index", range)
    .neq("index", "2")
    .order("index", { ascending: true });

  if (error) throw error;

  return data;
}
