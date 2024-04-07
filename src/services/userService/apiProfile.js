import { LOCALHOST_USER } from "../constant";

const prefixUrl = LOCALHOST_USER + "/profile";

export async function editNickname(userid, profileChangeRequest) {
  const response = await fetch(`${prefixUrl}/${userid}`, {
    method: "PATCH",
    body: JSON.stringify(profileChangeRequest),
  });
  return response.json();
}

export async function getProfileData(userid, id) {
  const response = await fetch(`${prefixUrl}?id=${id}`, {
    method: "GET",
    headers: { userid: userid },
  });
  const data = await response.json();
  return data;
}

export async function changeVisibility(userid, visibilityChangeRequest) {
  const response = await fetch(`${prefixUrl}/${userid}/visibility`, {
    method: "PATCH",
    body: JSON.stringify(visibilityChangeRequest),
  });
  return response.json();
}
