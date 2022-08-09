import { Router } from "express";

const route = Router();

route.get("/", (req, res, next) => {
  return res.status(200).json({ message: "Test supertest" });
});

export { route as JestRoute };
