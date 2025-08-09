export function getMockImages() {
  const data: string[] = [];

  for (let i = 1; i <= 50; i++) {
    data.push("/images/cat-tilapia.png");
  }

  return data;
}
