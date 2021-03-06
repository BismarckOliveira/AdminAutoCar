import { Category } from "../infra/typeorm/entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface IUpdateCategoryDTO {
  name: string;
  id: string;
}

interface ICategoriesRepository {
  create({ description, name }: ICreateCategoryDTO): Promise<Category>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
  findById(id: string): Promise<Category>;
  remove(category: Category): Promise<void>;
  updateName({ id, name }: IUpdateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO, IUpdateCategoryDTO };
