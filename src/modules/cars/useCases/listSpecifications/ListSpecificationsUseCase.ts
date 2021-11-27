import { Specification } from "../../entities/Specification";
import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";

class ListSpecificationUseCase {
  constructor(private specificationRepository: SpecificationRepository) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationRepository.list();
    return specifications;
  }
}

export { ListSpecificationUseCase };
