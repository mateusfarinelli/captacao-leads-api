import { CreateIntentionController } from '../modules/intentions/useCases/createIntention/CreateIntentionController';
import { Router } from "express";

const intentionRoutes = Router();

const createIntentionController = new CreateIntentionController()

intentionRoutes.post("/", createIntentionController.handle)
intentionRoutes.post("/:intention_id")
intentionRoutes.get("/", createIntentionController.teste)

export { intentionRoutes }