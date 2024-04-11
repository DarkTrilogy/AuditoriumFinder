import { LOCALHOST_AUTH } from "../constant";

const prefixUrl = LOCALHOST_AUTH + "/signup";

export async function signUp(request) {
  console.log("SIGNUP DATA1", request);
  const response = await fetch(`${prefixUrl}/`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("JSON", JSON.stringify(request));
  localStorage.setItem("nickname", request.nickname);
  localStorage.setItem("email", request.email);

  const data = await response.json();
  console.log("SIGNUP DATA", data);
  return { data };
}
