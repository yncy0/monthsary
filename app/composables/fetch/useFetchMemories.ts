// import type { Database } from "~/types/database.types";

// export async function useFetchMemories() {
//   const client = useSupabaseClient<Database>();
//
//   const { data, error } = await client
//     .from("index_memories")
//     .select(` *, images(id, image_url, unique_id)`)
//     .order("date", { ascending: true });
//
//   if (error) throw error;
//
//   return data;
// }

export async function useFetchMemories() {
  const { memories } = await $fetch('/api/memories')

  return memories
}
