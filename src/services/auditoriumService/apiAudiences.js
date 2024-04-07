const prefixUrl = "http://10.8.0.4:8050";
// const prefixUrl = "http://25.12.120.182:8050";

// DONE
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

// PROCESS
export async function getUserAudience(userId) {
  console.log("GETUSERAUDIENCE", userId);
  const response = await fetch(`${prefixUrl}/auditorium/building`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      userId: userId,
    },
  });
  const data = await response.json();
  console.log("GETUSERAUDIENCE101", data);
  return data;
}

// DONE
export async function getAudienceInfo(auditoriumId) {
  const response = await fetch(
    `${prefixUrl}/auditorium/info/${auditoriumId}?&languageCode=en`,
  );
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

// DONE
export async function addUserToAuditorium(userId, audienceId, silentStatus) {
  console.log("ADD USER TO AUDITORIUM", userId, audienceId, silentStatus);
  const response = await fetch(`${prefixUrl}/auditorium/users/add_user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      userId: userId,
    },
    body: JSON.stringify({
      auditoriumId: audienceId,
      silentStatus: silentStatus === "silent" ? true : false,
    }),
  });

  const data = await response.json();
  console.log("sdjf;lkasf", userId, audienceId, silentStatus, data);
  return { data };
}

export async function removeUserFromAuditorium(userId) {
  console.log("REMOVE USER FROM AUDITORIUM", userId);
  const response = await fetch(`${prefixUrl}/auditorium/remove_user`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      userId: userId,
    },
  });
  return response.json();
}
