// const prefixUrl = "http://10.8.0.4:8000";
const prefixUrl = "http://25.12.120.182:8000";

export async function getAllBuildings() {
  const response = await fetch(`${prefixUrl}/buildings`);
  const data = await response.json();
  return data;
}

export async function getBuilding(buildingId) {
  const response = await fetch(`${prefixUrl}/buildings/${buildingId}`);
  const data = await response.json();
  return data;
}
