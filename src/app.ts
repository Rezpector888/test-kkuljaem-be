import MobileRouter from "@mobile/mobile.router";
import WebAppRouter from "@webapp/webapp.router";
import express, { Application } from "express";
import pino from "pino";
import { pinoHttp } from "pino-http";
import "reflect-metadata";

const logger = pino({
  name: "Kkuljaem",
  level: "debug",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: true,
      ignore: "pid,hostname",
      singleLine: true,
    },
  },
  serializers: {
    req(request) {
        request.body = request.raw.body
        return request
    }
  }
});

const app: Application = express();
app.use(pinoHttp(logger))
app.use(express.json());
app.use("/api/web-app", WebAppRouter);
app.use("/api/mobile", MobileRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
