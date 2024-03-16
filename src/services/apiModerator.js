export async function getReports() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = "http://localhost:8080/moderator/reports";
  const response = await fetch(proxyUrl + targetUrl, {
    headers: {
      origin: "http://localhost:5173/settings", // Или можно использовать 'x-requested-with': 'XMLHttpRequest'
      "x-requested-with": "XMLHttpRequest",
    },
  });

  return response;
}
