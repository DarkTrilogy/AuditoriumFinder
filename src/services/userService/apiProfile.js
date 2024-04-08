import { LOCALHOST_USER } from "../constant";

const prefixUrl = LOCALHOST_USER + "/profile";

// DONE
export async function editNickname(userid, profileChangeRequest) {
  console.log("EDIT NICKNAME1", userid, profileChangeRequest);
  const response = await fetch(`${prefixUrl}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      userid: userid,
    },
    body: JSON.stringify({ nickname: profileChangeRequest }),
  });

  const data = await response.json();
  console.log("EDIT NICKNAME2", data);
  return data;
}

// DONE
export async function getProfileData(userid, id) {
  console.log("GET PROFILE DATA1", userid, id);
  const response = await fetch(`${prefixUrl}?id=${id}`, {
    method: "GET",
    headers: { userid: userid },
  });
  const data = await response.json();
  console.log("GET PROFILE DATA2", data);
  return data;
}

export async function changeVisibility(userid, visibilityChangeRequest) {
  const response = await fetch(`${prefixUrl}/${userid}/visibility`, {
    method: "PATCH",
    body: JSON.stringify(visibilityChangeRequest),
  });
  return response.json();
}
