// @PostMapping("/")

import { LOCALHOST_AUTH } from "../constant";

const prefixUrl = LOCALHOST_AUTH + "/pwd";

export async function passwordChange(request) {
  console.log("PASSWORD CHANGE1", request);
  const response = await fetch(`${prefixUrl}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
  const data = await response.json();
  console.log("PASSWORD CHANGE2", data);
  return data;
}
