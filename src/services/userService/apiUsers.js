import { LOCALHOST_USER } from "../constant";

const prefixUrl = LOCALHOST_USER + "/user";

// DONE
export async function searchByCriteria(userId, nickname = "", tagIds = "") {
  let url = `${prefixUrl}/search`;
  let params = "";
  if (userId) params += `id=${userId}&`;
  if (nickname) params += `nickname=${nickname}&`;
  if (tagIds) params += `&tags=${tagIds}&`;

  if (params) url += `?${params}`;
  console.log("SEARCH123", url);
  const response = await fetch(url);

  let data = await response.json();
  // if (userId === 0) return { data, count: data.length };
  console.log("APIUSER", data);

  // data = data.find((user) => user.userId === Number(userId));
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
