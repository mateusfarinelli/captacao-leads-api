import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "../container/";
import { AppError } from "../errors/AppError";
import { routes } from "../../routes";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../../swagger.json";

const app = express();

app.use(express.json());


app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(cors());
app.use(routes);

app.use(
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }
    return res.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };