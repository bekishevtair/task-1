export async function getData() {
  return fetch("http://localhost:8080/task/all", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((response) => response)
    .catch((e) => console.log(e)).finally(() => console.log());
}

export async function createCard({ name, phone, jobPosition }: any) {
  try {
    const response = await fetch("http://localhost:8080/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone, jobPosition }),
    });
    console.log(response);
  } catch (e) {
    console.log(e);
  } finally {

  }
}
