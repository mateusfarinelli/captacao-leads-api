import { Router } from "express";

const intentionRoutes = Router();

intentionRoutes.post("/")
intentionRoutes.post("/:intention_id")

export { intentionRoutes }