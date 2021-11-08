import { Category } from "../model/category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ description, name }: ICreateCategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category;
}

export { ICategoriesRepository, ICreateCategoryDTO };
