import { LOCALHOST_USER } from "../constant";

const prefixUrl = LOCALHOST_USER + "/friends";

export async function getFriendList(userid) {
  console.log("1. GET FRIENDS: ", userid);
  const response = await fetch(`${prefixUrl}/`, {
    method: "GET",
    headers: {
      userid: userid,
    },
  });
  const data = await response.json();
  console.log("2. GET FRIENDS: ", data);
  return { data, count: data.length };
}

export async function subscribeToNotificationsFromUser(id, userid) {
  const response = await fetch(`${prefixUrl}/${id}/subscribe/${userid}`, {
    method: "POST",
  });
  return response.json();
}

export async function unsubscribeFromNotificationsFromUser(id, userid) {
  const response = await fetch(`${prefixUrl}/${id}/unsubscribe/${userid}`, {
    method: "POST",
  });
  return response.json();
}

export async function removeFromFriendList(friendid, userid) {
  console.log("USEDELETEFRIEND2", friendid, userid);
  const response = await fetch(`${prefixUrl}/${friendid}/remove`, {
    method: "PATCH",
    headers: {
      userid: userid,
    },
  });

  const data = await response.json();
  console.log("USEDELETEFRIEND3", data);
  return data;
}
