import { LOCALHOST_AUTH } from "../constant";

const prefixUrl = LOCALHOST_AUTH + "/signin";

export async function signIn(request) {
  const response = await fetch(`${prefixUrl}`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });

  //   {message: 'Неправильный email или пароль'}
  const data = await response.json();
  console.log("SIGNIN DATA", data.message);
  if (data.message === "Неправильный email или пароль") {
    throw new Error("Неправильный email или пароль");
  }
  return { data };
}
