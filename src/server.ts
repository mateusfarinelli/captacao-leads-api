import "reflect-metadata"
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import dataSource  from "./infra/database";
import { routes } from "./routes"

/**
 * Preparando rota do swagger
 */
//app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

dataSource.initialize().then(() => {
  const app = express();
  app.use(express.json());
  app.use(cors({ origin: true, credentials: true }));
  app.use(routes)

  return app.listen(3000, () => {
      console.log('Server Running on http://localhost:3000');
  })
})