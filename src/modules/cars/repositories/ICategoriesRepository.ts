import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ description, name }: ICreateCategoryDTO): Promise<void>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
  remove(category: Category): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
