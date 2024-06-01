import { post } from "axios";
import { verifyEmail } from "./apiEmailVerifier";

jest.mock("axios");

describe("apiEmailVerifier", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return true if email is verified", async () => {
    const email = "test@example.com";
    const token = "1234567890";

    post.mockResolvedValue({ data: { success: true } });

    const result = await verifyEmail(email, token);

    expect(post).toHaveBeenCalledWith("/api/email-verifier", {
      email,
      token,
    });
    expect(result).toBe(true);
  });

  it("should return false if email is not verified", async () => {
    const email = "test@example.com";
    const token = "1234567890";

    post.mockResolvedValue({ data: { success: false } });

    const result = await verifyEmail(email, token);

    expect(post).toHaveBeenCalledWith("/api/email-verifier", {
      email,
      token,
    });
    expect(result).toBe(false);
  });

  it("should throw an error if axios post fails", async () => {
    const email = "test@example.com";
    const token = "1234567890";

    post.mockRejectedValue(new Error("Network Error"));

    await expect(verifyEmail(email, token)).rejects.toThrow("Network Error");
  });
});
