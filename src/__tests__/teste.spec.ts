import request from "supertest";
import { App } from "../app";

describe("teste route jest", () => {
  it("status: 200", async () => {
    const API = new App();
    const res = await request(API.returnAppforTest()).get("/jest");

    expect(res.statusCode).toEqual(200);
  });

  it("return body", async () => {
    const API = new App();
    const res = await request(API.returnAppforTest()).get("/jest");

    expect(res.body).toEqual({ message: "Test supertest" });
  });
});
