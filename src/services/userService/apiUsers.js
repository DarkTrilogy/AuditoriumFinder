import { LOCALHOST_USER } from "../constant";

const prefixUrl = LOCALHOST_USER + "/user";

export async function searchByCriteria(userId, nickname = "", tagIds = "") {
  const response = await fetch(
    `${prefixUrl}/${userId}/search?nickname=${nickname}&tags=${tagIds}`,
  );

  let data = await response.json();
  if (userId === 0) return { data, count: data.length };

  data = data.find((user) => user.userId === Number(userId));
  return data;
}

export async function reportUser(userid, reportRequest, id) {
  const response = await fetch(`${prefixUrl}/${id}/report`, {
    method: "POST",
    body: JSON.stringify(reportRequest),
  });
  const data = await response.json();
  return { data };
}
