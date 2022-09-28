import { Router } from "express";
import { intentionRoutes } from "./intention.routes";
import { leadRoutes } from "./lead.routes";

const routes = Router();

routes.use("/intention", intentionRoutes);
routes.use("/lead", leadRoutes)

export { routes };