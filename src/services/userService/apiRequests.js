import { LOCALHOST_USER } from "../constant";

const prefixUrl = LOCALHOST_USER + "/requests";

// DONE
export async function getIncomingRequests(userid) {
  console.log("1. GET INCOMING REQUESTS: ", userid);
  const response = await fetch(`${prefixUrl}/in`, {
    method: "GET",
    headers: {
      userid: userid,
    },
  });
  const data = await response.json();
  console.log("2. GET INCOMING REQUESTS: ", data);
  return data;
}

// DONE
export async function getOutgoingRequests(userid) {
  console.log("1. GET OUTCOMING REQUESTS: ", userid);
  const response = await fetch(`${prefixUrl}/out`, {
    method: "GET",
    headers: {
      userid: userid,
    },
  });
  const data = await response.json();
  console.log("2. GET OUTCOMING REQUESTS: ", data);
  return data;
}

// DONE
export async function makeFriendRequest(userid, id) {
  console.log("MAKE FRIEND REQUEST1: ", userid, id);
  const response = await fetch(`${prefixUrl}/in/${id}/accept`, {
    method: "POST",
    headers: {
      userid: userid,
    },
  });

  const data = await response.json();
  console.log("MAKE FRIEND REQUEST2: ", data);
  return { data };
}

// DONE
export async function declineIncomingRequestFromUser(userid, id) {
  console.log("1. DECLINE INCOMING REQUEST: ", userid, id);
  const response = await fetch(`${prefixUrl}/in/${id}/decline`, {
    method: "POST",
    headers: {
      userid: userid,
    },
  });
  const data = await response.json();
  console.log("2. DECLINE INCOMING REQUEST: ", data);
  return data;
}

// DONE
export async function removeOutgoingRequest(userid, id) {
  console.log("REMOVE OUTGOING REQUEST1: ", userid, id);
  const response = await fetch(`${prefixUrl}/out/${id}/remove`, {
    method: "POST",
    headers: {
      userid: userid,
    },
  });
  const data = await response.json();
  console.log("REMOVE OUTGOING REQUEST2: ", data);
  return data;
}
