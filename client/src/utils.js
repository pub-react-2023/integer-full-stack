export async function api(endpoint, method = "GET", body) {
  const response = await fetch(`http://localhost:3000/api${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await (method === "GET" ? response.json() : response.text());
  return data;
}
