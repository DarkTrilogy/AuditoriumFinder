import { LOCALHOST_USER } from "../constant";

const prefixUrl = LOCALHOST_USER + "/friends";

export async function getFriendList(userid, friendId = 0) {
  const response = await fetch(`${prefixUrl}/${userid}/`);
  const data = await response.json();
  if (friendId !== 0) {
    const result = data.find((friend) => friend.userId === Number(friendId));
    return result;
  }
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
