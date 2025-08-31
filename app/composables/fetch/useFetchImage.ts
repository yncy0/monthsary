export async function useFetchImage() {
  const { images } = await $fetch("/api/images");

  return images;
}
