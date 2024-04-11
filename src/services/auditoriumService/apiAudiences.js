import { mapIntToProfiles } from "../userService/apiProfile";

const prefixUrl = "http://10.8.0.4:8000";
// const prefixUrl = "http://25.12.120.182:8000";

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
      `${prefixUrl}/auditorium/building/${building.id}?intervalStart=${intervalStart}&intervalEnd=${intervalEnd}&languageCode=en`,
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

// DONE ??
export async function getUserAudience(userId) {
  const response = await fetch(
    `${prefixUrl}/auditorium/building?languageCode=en`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userId: userId,
      },
    },
  );
  const data = await response.json();
  return data;
}

// DONE
export async function getAudienceInfo(auditoriumId) {
  const response = await fetch(
    `${prefixUrl}/auditorium/info/${auditoriumId}?languageCode=en`,
  );
  const data = await response.json();
  return data;
}

export async function getAudienceUsers(auditoriumId) {
  const response = await fetch(
    `${prefixUrl}/auditorium/info/${auditoriumId}/users?languageCode=en`,
  );
  const data = await response.json();

  let users = data.users;
  const data2 = await mapIntToProfiles(localStorage.getItem("userId"), users);
  console.log("GET AUDIENCE USERS", data2);

  return data2;
}

// DONE
export async function addUserToAuditorium(userId, audienceId, silentStatus) {
  console.log("ADD USER TO AUDITORIUM", userId, audienceId, silentStatus);
  const response = await fetch(
    `${prefixUrl}/auditorium/users/add_user?languageCode=en`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        userId: userId,
      },
      body: JSON.stringify({
        auditoriumId: audienceId,
        silentStatus: silentStatus === "silent" ? true : false,
      }),
    },
  );

  const data = await response.json();
  console.log("sdjf;lkasf", userId, audienceId, silentStatus, data);
  return { data };
}

// DONE
export async function removeUserFromAuditorium(userId) {
  console.log("REMOVE USER FROM AUDITORIUM", userId);
  const response = await fetch(
    `${prefixUrl}/auditorium/remove_user?languageCode=en`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        userId: userId,
      },
    },
  );

  const data = await response.json();
  return data;
}
