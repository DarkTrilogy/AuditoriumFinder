const prefixUrl = "http://localhost:8080/auth/email";

export async function sendConfirmationCode(email) {
  // how to set no-cors to fetch
  const response = await fetch(`${prefixUrl}/confirm`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });

  const data = await response.json();
  console.log("VERIFICATION DATA", data.email);
  if (data.email === "Некорректный email") {
    throw new Error("Некорректный email");
  }
  return { data };
}
