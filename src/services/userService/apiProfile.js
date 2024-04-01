import { LOCALHOST } from "./constant";

const prefixUrl = LOCALHOST + "/profile";

export async function editNickname(userid, profileChangeRequest) {
  const response = await fetch(`${prefixUrl}/${userid}`, {
    method: "PATCH",
    body: JSON.stringify(profileChangeRequest),
  });
  return response.json();
}

export async function getProfileData(userid, id) {
  const response = await fetch(`${prefixUrl}/${userid}/${id}`);
  return response.json();
}

export async function changeVisibility(userid, visibilityChangeRequest) {
  const response = await fetch(`${prefixUrl}/${userid}/visibility`, {
    method: "PATCH",
    body: JSON.stringify(visibilityChangeRequest),
  });
  return response.json();
}
