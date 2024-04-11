const prefixUrl = "http://localhost:8080/auth/email";

export async function sendConfirmationCode(email) {
  const response = await fetch(`${prefixUrl}/confirm`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });

  const data = await response.json();
  console.log("VERIFICATION DATA", data);
  if (data.email === "Некорректный email") {
    throw new Error("Некорректный email");
  }
  return data;
}
