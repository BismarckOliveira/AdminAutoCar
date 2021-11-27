import { Router } from "express";

import createSpecificationController from "../modules/cars/useCases/createSpecification";
import listSpecificationController from "../modules/cars/useCases/listSpecifications";

const especificationRouter = Router();

especificationRouter.post("/", (request, response) => {
  return createSpecificationController().handler(request, response);
});

especificationRouter.get("/", (request, response) => {
  return listSpecificationController().handler(request, response);
});

export { especificationRouter };
