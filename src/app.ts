import express, { Express } from "express";
import cors from "cors";
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
    this.app.use("/");
  }

  public returnAppforTest() {
    return this.app;
  }

  public initialServer(port?: number) {
    const fixed = port || process.env.PORT || this.PORT;

    this.app.listen(fixed);
  }
}
