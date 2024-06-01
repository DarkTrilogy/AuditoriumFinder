import apiAuth from "./apiAuth";

describe("apiAuth", () => {
  it("should authenticate with GitHub", async () => {
    const githubAuth = apiAuth.providers.GitHub;
    expect(githubAuth).toBeDefined();
    const authResponse = await githubAuth.authorize(
      "https://example.com/callback",
    );
    expect(authResponse).toHaveProperty("accessToken");
  });

  it("should handle authentication errors", async () => {
    const errorAuth = apiAuth.providers.ErrorAuth;
    expect(errorAuth).toBeDefined();
    try {
      await errorAuth.authorize("https://example.com/callback");
      // eslint-disable-next-line no-undef
      fail("Expected an error to be thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("should return an authentication token", async () => {
    const token = await apiAuth.getToken();
    expect(token).toBeString();
  });
});
