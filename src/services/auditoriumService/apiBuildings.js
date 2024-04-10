import { PAGE_SIZE } from "../../utils/constants";

const prefixUrl = "http://10.8.0.4:8000";
// const prefixUrl = "http://25.12.120.182:8050";

export async function getAllBuildings(page, size = 10) {
  const response = await fetch(
    `${prefixUrl}/buildings?page=${page - 1}&size=${size}`,
  );

  const data = await response.json();
  console.log(
    "GET ALL BUILDINGS",
    `${prefixUrl}/buildings?page=${page}&size=${size}`,
    data,
  );

  console.log(
    "GET ALL BUILDINGS COUNT",
    response.headers.get("entities_amount"),
  );
  return data;
}

export async function getBuilding(buildingId) {
  const response = await fetch(`${prefixUrl}/buildings/${buildingId}`);
  const data = await response.json();
  return data;
}
