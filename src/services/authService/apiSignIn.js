import { LOCALHOST_AUTH } from "../constant";

const prefixUrl = LOCALHOST_AUTH + "/signin";

export async function signIn(request) {
  const response = await fetch(`${prefixUrl}/`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();
  console.log("SIGNIN DATA", data);
  if (data.email === "Некорректный email") {
    throw new Error("Некорректный email");
  }
  if (data.message === "Неправильный email или пароль") {
    console.log("SIGNIN DATA1", data);
    throw new Error("Неправильный email или пароль");
  }
  data = {
    user: { jwt: data.jwt, refresh: data.refresh, userid: data.userid },
  };

  localStorage.setItem("accessToken", data.user.jwt);
  localStorage.setItem("refreshToken", data.user.refresh);
  localStorage.setItem("userId", data.user.userid);

  return data;
}
