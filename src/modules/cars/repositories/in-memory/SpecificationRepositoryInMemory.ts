import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

import {
  ISpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationRepositoryInMemory implements ISpecificationsRepository {
  specifications: Specification[] = [];

  async create({
    description,
    name,
  }: ISpecificationDTO): Promise<Specification> {
    const specification = new Specification();
    Object.assign(specification, {
      description,
      name,
    });
    this.specifications.push(specification);
    return specification;
  }
  async list(): Promise<Specification[]> {
    return this.specifications;
  }
  async findByName(name: string): Promise<Specification> {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
  async findByIds(ids: string[]): Promise<Specification[]> {
    const allApecifications = this.specifications.filter((specification) =>
      ids.includes(specification.id)
    );

    return allApecifications;
  }
}

export { SpecificationRepositoryInMemory };
