const prefixUrl = "http://localhost:8080/friends";

export async function getFriendList(userid) {
  const response = await fetch(`${prefixUrl}/${userid}`);
  return response.json();
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
  const response = await fetch(`${prefixUrl}/${id}/remove/${userid}`, {
    method: "PATCH",
  });
  return response.json();
}
