const prefixUrl = "http://localhost:8080/user";

export async function searchByCriteria(userid, nickname, tagIds) {
  const response = await fetch(
    `${prefixUrl}/${userid}/search?nickname=${nickname}&tags=${tagIds}`,
  );
  return response.json();
}

export async function reportUser(userid, reportRequest, id) {
  const response = await fetch(`${prefixUrl}/${id}/report`, {
    method: "POST",
    body: JSON.stringify(reportRequest),
  });
  return response.json();
}
