import { LOCALHOST } from "./constant";

const prefixUrl = LOCALHOST + "/requests";

export async function getIncomingRequests(userid) {
  const response = await fetch(`${prefixUrl}/${userid}/in`);
  return response.json();
}

export async function getOutgoingRequests(userid) {
  const response = await fetch(`${prefixUrl}/${userid}/out`);
  return response.json();
}

export async function makeFriendRequest(userid, id) {
  const response = await fetch(`${prefixUrl}/${userid}/in/${id}/accept`, {
    method: "POST",
  });

  const data = await response.json();
  return { data };
}

export async function declineIncomingRequestFromUser(userid, id) {
  const response = await fetch(`${prefixUrl}/${userid}/in/${id}/decline`, {
    method: "POST",
  });
  return response.json();
}

export async function removeOutgoingRequest(userid, id) {
  const response = await fetch(`${prefixUrl}/${userid}/out/${id}/remove`, {
    method: "POST",
  });
  return response.json();
}
