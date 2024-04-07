import { LOCALHOST_USER } from "../constant";

const prefixUrl = LOCALHOST_USER + "/account";

export async function createProfile(profileCreateRequest) {
  console.log("PROFILE FOR CREATING", profileCreateRequest);
  const response = await fetch(`${prefixUrl}/`, {
    method: "PUT",
    body: JSON.stringify(profileCreateRequest),
  });
  const data = await response.json();
  console.log("CREATEPROFILE", data);
  return { data };
}

export async function removeTelegram(userid) {
  const response = await fetch(`${prefixUrl}/${userid}/remove_telegram`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log("REMOVETELEGRAM", data);
  return { data };
}

export async function addTelegram(userid) {
  const response = await fetch(`${prefixUrl}/${userid}/add_telegram`, {
    method: "PATCH",
  });
  const data = await response.json();
  console.log("ADDTELEGRAM", data);
  return { data };
}
