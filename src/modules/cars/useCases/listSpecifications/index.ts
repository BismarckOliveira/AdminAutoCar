import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationUseCase } from "./ListSpecificationsUseCase";

export default (): ListSpecificationsController => {
  const specificationRepository = new SpecificationRepository();

  const listSpecificationUseCase = new ListSpecificationUseCase(
    specificationRepository
  );

  const listSpecificationController = new ListSpecificationsController(
    listSpecificationUseCase
  );

  return listSpecificationController;
};
