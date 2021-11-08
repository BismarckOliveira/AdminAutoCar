import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationUseCase } from "./ListSpecificationsUseCase";

const specificationRepository = SpecificationRepository.getInstance();

const listSpecificationUseCase = new ListSpecificationUseCase(
  specificationRepository
);

const listSpecificationController = new ListSpecificationsController(
  listSpecificationUseCase
);

export { listSpecificationController };
