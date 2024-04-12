import { PAGE_SIZE } from "../../utils/constants";

const prefixUrl = "http://10.8.0.4:8000";
// const prefixUrl = "http://25.12.120.182:8000";

export async function getAllBuildings(page, size = 10) {
  const response = await fetch(
    `${prefixUrl}/buildings?page=${page - 1}&size=${size}&languageCode=en`,
  );

  const data = await response.json();
  console.log(
    "GET ALL BUILDINGS",
    `${prefixUrl}/buildings?page=${page}&size=${size}`,
    data,
  );

  const count = response.headers.get("entities_amount");
  console.log("1234567", { data, count });
  return { data, count };
}

export async function getBuilding(buildingId) {
  const response = await fetch(
    `${prefixUrl}/buildings/${buildingId}?languageCode=en`,
  );
  const data = await response.json();
  console.log("GET BUILDING1", data);
  return data;
}
