import apiSignIn from "./apiSignIn";

describe("apiSignIn", () => {
  it("should return a promise", () => {
    expect(apiSignIn("username", "password")).toBeInstanceOf(Promise);
  });

  it("should make a POST request to the API with the correct credentials", () => {
    const username = "testUsername";
    const password = "testPassword";
    const apiEndpoint = "https://example.com/api/auth/signin";

    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => ({ token: "testToken" }) }),
    );

    apiSignIn(username, password);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  });

  it("should return the authentication token on success", async () => {
    const username = "testUsername";
    const password = "testPassword";
    const token = "testToken";

    global.fetch = jest.fn(() => Promise.resolve({ json: () => ({ token }) }));

    const result = await apiSignIn(username, password);

    expect(result).toBe(token);
  });

  it("should throw an error on API failure", async () => {
    const username = "testUsername";
    const password = "testPassword";
    const error = new Error("API error");

    global.fetch = jest.fn(() => Promise.reject(error));

    await expect(apiSignIn(username, password)).rejects.toThrowError(error);
  });
});
