import { Specification } from "../model/specification";

interface ISpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: ISpecificationDTO);
  list(): Specification[];
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ISpecificationDTO };
