import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
  ISpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Repository<Specification>;

  constructor() {
    this.specifications = getRepository(Specification);
  }

  async create({ description, name }: ISpecificationDTO): Promise<void> {
    const specification = this.specifications.create({
      name,
      description,
    });

    await this.specifications.save(specification);
  }
  async list(): Promise<Specification[]> {
    const specifications = await this.specifications.find();
    return specifications;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.specifications.findOne({ name });
    return specification;
  }
}

export { SpecificationRepository };
