// const prefixUrl = "http://10.8.0.4:8000";
const prefixUrl = "http://25.12.120.182:8000";

export async function getFreeAudiencesInBuilding(building) {
  const currentDate = new Date();
  const day = currentDate.toISOString().split("T")[0];
  let hour =
    currentDate.getHours() < 10
      ? "0" + currentDate.getHours()
      : currentDate.getHours();
  const minutes =
    currentDate.getMinutes() < 10
      ? "0" + currentDate.getMinutes()
      : currentDate.getMinutes();

  hour = 10; // для тестов
  const intervalStart = day + "-" + hour + "-" + minutes;
  const intervalEnd = day + "-" + building.lastLessonEnd;

  if (hour <= Number(building.lastLessonEnd.split("-")[0])) {
    const response = await fetch(
      `${prefixUrl}/auditorium/building/${building.id}?intervalStart=${intervalStart}&intervalEnd=${intervalEnd}`,
    );
    console.log(
      "URL",
      `${prefixUrl}/auditorium/building/${building.id}?intervalStart=${intervalStart}&intervalEnd=${intervalEnd}`,
    );
    const data = await response.json();
    return data;
  } else {
    return {
      building: {},
      auditoriums: {},
    };
  }
}

export async function getUserAudience(userId) {
  const response = await fetch(`${prefixUrl}/auditorium/building`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      userId: userId,
    },
  });
  const data = await response.json();
  return data;
}

export async function getAudienceInfo(auditoriumId) {
  const response = await fetch(`${prefixUrl}/auditorium/info/${auditoriumId}`);
  const data = await response.json();
  return data;
}

export async function getAudienceUsers(auditoriumId) {
  const response = await fetch(
    `${prefixUrl}/auditorium/info/${auditoriumId}/users`,
  );
  const data = await response.json();
  return data;
}

export async function addUserToAuditorium(userId, auditoriumId, silentStatus) {
  const response = await fetch(`${prefixUrl}/auditorium/users/add_user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      userId: userId,
    },
    body: JSON.stringify({
      auditoriumId,
      silentStatus,
    }),
  });
  return response.json();
}

export async function removeUserFromAuditorium(userId) {
  const response = await fetch(`${prefixUrl}/auditorium/remove_user`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      userId: userId,
    },
  });
  return response.json();
}
