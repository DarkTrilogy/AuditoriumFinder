describe("apiSignUp", () => {
  it("should call axios.post with the correct arguments", async () => {
    const axiosPostMock = jest
      .spyOn(axios, "post")
      .mockResolvedValue({ data: { token: "testToken" } });
    const payload = { email: "test@example.com", password: "testPassword" };

    await apiSignUp(payload);

    expect(axiosPostMock).toHaveBeenCalledWith("/auth/signup", payload);
    axiosPostMock.mockRestore();
  });

  it("should return the token on success", async () => {
    const token = "testToken";
    jest.spyOn(axios, "post").mockResolvedValue({ data: { token } });

    const result = await apiSignUp({
      email: "test@example.com",
      password: "testPassword",
    });

    expect(result).toEqual(token);
  });

  it("should throw an error if the request fails", async () => {
    const error = new Error("Test error");
    jest.spyOn(axios, "post").mockRejectedValue(error);

    await expect(
      apiSignUp({ email: "test@example.com", password: "testPassword" }),
    ).rejects.toThrow(error);
  });
});
