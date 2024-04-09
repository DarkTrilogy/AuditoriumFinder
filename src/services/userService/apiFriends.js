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

export async function removeFromFriendList(id, userid) {
  // await fetch(`${prefixUrl}/${id}/remove/${userid}`, {
  //   method: "PATCH",
  // });
  console.log("REMOVE", id, userid);
  const data = await getFriendList(id);
  console.log(data.data);

  data.data = data.data.filter((friend) => friend.userId !== userid);
  console.log(data.data);

  return { data };
}
