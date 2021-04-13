const request = require("supertest"); // Import supertest
const app = require("../index"); // import server
const { user, transaksi } = require("../models"); // Import user and transaksi models

let authenticationToken; // Variable to save the token

const deleteAll = async () => {
  await Promise.all([user.deleteMany(), transaksi.deleteMany()]);
};

deleteAll();

describe("Auth Test", () => {
  describe("/auth/signup POST", () => {
    it("It should make user and get the token", async () => {
      const res = await request(app).post("/auth/signup").send({
        email: "kamal@gmail.com",
        password: "kamalishaM&1",
        confirmPassword: "kamalishaM&1",
        name: "Kamal Isham",
      });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toEqual("Success");
      expect(res.body).toHaveProperty("token");
    });
  });

  // Test the error
  describe("/auth/signup POST", () => {
    it("It should error when make user", async () => {
      const res = await request(app).post("/auth/signup").send({
        email: "kamal@gmail.com",
        password: "kamalishaM&1",
        confirmPassword: "kamalishaM&1",
        name: "Kamal Isham",
      });

      expect(res.statusCode).toEqual(401);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toEqual("User can't be created");
    });
  });

  describe("/POST Sign In", () => {
    it("It should make user login and get authentication_key (jwt)", async () => {
      const res = await request(app).post("/auth/signin").send({
        email: "kamal@gmail.com",
        password: "kamalishaM&1",
      });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toEqual("Success");
      expect(res.body).toHaveProperty("token");

      authenticationToken = res.body.token;
    });
  });
});

describe("Transaksi Test", () => {
  /*
   * Test the first /GET route
   * There are no data
   */
  describe("/GET transaksi", () => {
    it("it should GET all the transaksi", async () => {
      const res = await request(app)
        .get("/transaksi")
        .set({
          Authorization: `Bearer ${authenticationToken}`,
        });

      expect(res.statusCode).toEqual(404);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toEqual("Transaksi Not Found");
    });
  });
});
