import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "@modules/cars/useCases/listSpecifications/ListSpecificationsController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const especificationRouter = Router();
const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

especificationRouter.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handler
);

especificationRouter.get("/", listSpecificationsController.handler);

export { especificationRouter };
