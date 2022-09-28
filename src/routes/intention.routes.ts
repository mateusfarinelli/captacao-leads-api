import { CreateIntentionController } from '../modules/intentions/useCases/createIntention/CreateIntentionController';
import { Router } from "express";
import { UpdateIntentionController } from '../modules/intentions/useCases/updateIntention/UpdateIntentionController';

const intentionRoutes = Router();

const createIntentionController = new CreateIntentionController();
const updateIntentionController = new UpdateIntentionController();

intentionRoutes.post("/", createIntentionController.handle);
intentionRoutes.put("/:intention_id", updateIntentionController.handle);

export { intentionRoutes }