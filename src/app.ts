import express, { Express } from "express";
import cors from "cors";

// Routes
import { router as RouterV1 } from "./Routes/v1";

import { JestRoute } from "./Routes/TestRouter";

export class App {
  private app: Express;
  private PORT: number;

  public constructor() {
    this.app = express();
    this.PORT = 5000;
    this.middles();
    this.routes();
  }

  private middles() {
    this.app.use(express.json());
    this.app.use(cors({ credentials: true, origin: "*" }));
  }

  private routes() {
    this.app.use("/", RouterV1);
    this.app.use("/jest", JestRoute);
  }

  public returnAppforTest() {
    return this.app;
  }

  public initialServer(port?: number) {
    const fixed = port || process.env.PORT || this.PORT;

    this.app.listen(fixed);
  }
}
