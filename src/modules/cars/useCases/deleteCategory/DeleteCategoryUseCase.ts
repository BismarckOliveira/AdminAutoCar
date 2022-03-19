/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class DeleteCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) { }

  async execute(name: string): Promise<void> {
    const category = await this.categoryRepository.findByName(name);

    if (!category) {
      throw new AppError("Category dos not Exists");
    }

    await this.categoryRepository.remove(category);
  }
}

export { DeleteCategoryUseCase };
