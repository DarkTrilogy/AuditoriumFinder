import { LOCALHOST_USER } from "../constant";

const prefixUrl = LOCALHOST_USER + "/moderator";

export async function getReports() {
  const response = await fetch(`${prefixUrl}/reports`);
  const data = await response.json();
  console.log("GET REPORTS", data);
  return data;
}

export async function declineReport(userid, id) {
  const response = await fetch(`${prefixUrl}/reports/${id}/decline`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      userid: userid,
    },
  });
  const data = await response.json();

  console.log("DECLINE REPORT", data);
  return data;
}

export async function banUser(userid, banRequest) {
  const response = await fetch(`${prefixUrl}/ban`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      userid: userid,
    },
    body: JSON.stringify(banRequest),
  });
  const data = await response.json();

  console.log("BAN USER", data);
  return data;
}

export async function getProfileData(id) {
  const response = await fetch(`${prefixUrl}/${id}`);
  const data = await response.json();

  console.log("GET PROFILE DATA", data);
  return data;
}
