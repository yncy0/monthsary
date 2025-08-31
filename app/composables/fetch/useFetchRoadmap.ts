export function useFetchRoadmap() {
  return useFetch('/api/roadmap');
}


export function useFetchRoadmapRange(range: string) {
  return useFetch(`/api/roadmap_range?range=${range}`);
}
