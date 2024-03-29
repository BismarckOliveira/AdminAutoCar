import { Category } from "@modules/cars/infra/typeorm/entities/Category";

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
  IUpdateCategoryDTO,
} from "../ICategoriesRepository";

class CategoryRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async create({ description, name }: ICreateCategoryDTO): Promise<Category> {
    const category = new Category();

    const newcategory = Object.assign(category, {
      name,
      description,
    });
    this.categories.push(category);
    return newcategory;
  }

  async list(): Promise<Category[]> {
    return this.categories;
  }

  async findByName(name: string): Promise<Category> {
    return this.categories.find((category) => category.name === name);
  }
  async findById(id: string): Promise<Category> {
    return this.categories.find((category) => category.id === id);
  }
  async remove(category: Category): Promise<void> {
    const index = this.categories.indexOf(category);
    this.categories.splice(index, 1);
  }

  async updateName({ id, name }: IUpdateCategoryDTO): Promise<void> {
    const category = this.categories.find((category) => category.id === id);
    const index = this.categories.indexOf(category);
    const categoryUpdated = {
      id: category.id,
      name,
      description: category.description,
      created_at: category.created_at,
    };
    this.categories.splice(index, 1, categoryUpdated);
  }
}

export { CategoryRepositoryInMemory };
