const prefixUrl = "http://localhost:8080/moderator";

export async function getReports() {
  const response = await fetch(`${prefixUrl}/reports`);
  const data = await response.json();
  return { data };
}

export async function getBanned() {
  const response = await fetch(`${prefixUrl}/banned`);
  return response.json();
}

export async function declineReport(moderatorId, id) {
  const response = await fetch(
    `${prefixUrl}/reports/${moderatorId}/${id}/decline`,
    {
      method: "POST",
    },
  );
  return response.json();
}

export async function banUser(moderatorId, id) {
  const response = await fetch(`${prefixUrl}/${moderatorId}/${id}/ban`, {
    method: "POST",
  });
  return response.json();
}

export async function removeUserFromBanned(moderatorId, id) {
  const response = await fetch(`${prefixUrl}/${moderatorId}/${id}/cancel_ban`, {
    method: "POST",
  });
  return response.json();
}

export async function getProfileData(moderatorId, id) {
  const response = await fetch(`${prefixUrl}/${moderatorId}/${id}`);
  return response.json();
}
