// напиши тесты к src/services/userService/apiProfile.js - ?
const request = require("supertest");
const app = require("../app");
const userService = require("../userService");

jest.mock("../userService");

describe("GET /user/profile", () => {
  it("should return a user profile", async () => {
    const mockUserProfile = {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    };

    userService.getProfile.mockResolvedValue(mockUserProfile);

    const response = await request(app).get("/user/profile");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockUserProfile);
    expect(userService.getProfile).toHaveBeenCalledTimes(1);
  });

  it("should return a 500 error if the user service fails", async () => {
    userService.getProfile.mockRejectedValue(new Error("Service error"));

    const response = await request(app).get("/user/profile");

    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty("message", "Service error");
    expect(userService.getProfile).toHaveBeenCalledTimes(1);
  });
});

describe("POST /user/profile", () => {
  it("should update a user profile", async () => {
    const mockUserProfile = {
      name: "Jane Doe",
      email: "jane.doe@example.com",
    };

    userService.updateProfile.mockResolvedValue(mockUserProfile);

    const response = await request(app)
      .post("/user/profile")
      .send(mockUserProfile);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockUserProfile);
    expect(userService.updateProfile).toHaveBeenCalledTimes(1);
    expect(userService.updateProfile).toHaveBeenCalledWith(mockUserProfile);
  });

  it("should return a 500 error if the user service fails", async () => {
    userService.updateProfile.mockRejectedValue(new Error("Service error"));

    const response = await request(app)
      .post("/user/profile")
      .send({ name: "Jane Doe", email: "jane.doe@example.com" });

    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty("message", "Service error");
    expect(userService.updateProfile).toHaveBeenCalledTimes(1);
  });
});
