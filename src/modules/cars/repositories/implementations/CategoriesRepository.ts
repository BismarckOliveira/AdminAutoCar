import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import {
  ICreateCategoryDTO,
  ICategoriesRepository,
  IUpdateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }

  async findById(id: string): Promise<Category> {
    const category = await this.repository.findOne(id);
    return category;
  }

  async remove(category: Category): Promise<void> {
    await this.repository.remove(category);
  }

  async updateName({ name, id }: IUpdateCategoryDTO): Promise<void> {
    await this.repository.update(id, { name });
  }
}

export { CategoriesRepository };
