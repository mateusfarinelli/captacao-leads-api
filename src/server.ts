import express, { NextFunction, Request, Response } from "express";
import { createConnection } from "infra/database";
import { routes } from "./routes"
import { AppError } from "./shared/errors/AppError";

const app = express();

app.use(express.json());

/**
 * Preparando rota do swagger
 */
//app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

createConnection()
app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000/")
);