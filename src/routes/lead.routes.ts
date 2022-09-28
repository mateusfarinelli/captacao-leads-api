import { Router } from "express";
import { CreateLeadController } from "../modules/leads/useCases/createLead/CreateLeadController";

const leadRoutes = Router();

const createLeadController = new CreateLeadController();

leadRoutes.post("/", createLeadController.handle);

export { leadRoutes }