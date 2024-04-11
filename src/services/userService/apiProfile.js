import { LOCALHOST_USER } from "../constant";

const prefixUrl = LOCALHOST_USER + "/profile";

// DONE
export async function editNickname(userid, profileChangeRequest) {
  const response = await fetch(`${prefixUrl}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      userid: userid,
    },
    body: JSON.stringify({ nickname: profileChangeRequest }),
  });

  const data = await response.json();
  return data;
}

// DONE
export async function getProfileData(userid, id) {
  console.log("getProfileData", userid, id);
  const response = await fetch(`${prefixUrl}?id=${id}`, {
    method: "GET",
    headers: { userid: userid },
  });
  const data = await response.json();
  console.log("getProfileData", data);
  return data;
}

// DONE
export async function changeVisibility(userid, visibilityChangeRequest) {
  const response = await fetch(`${prefixUrl}/visibility`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      userid: userid,
    },
    body: JSON.stringify(visibilityChangeRequest),
  });
  const data = await response.json();
  console.log("changeVisibility", data);
  return data;
}

export async function mapIntToProfiles(userid, request) {
  console.log("mapIntToProfiles1", userid, request);
  const response = await fetch(`${prefixUrl}/listed`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      userid: userid,
    },
    body: JSON.stringify(request),
  });
  const data2 = await response.json();
  console.log("mapIntToProfiles2", data2);
  return data2;
}
