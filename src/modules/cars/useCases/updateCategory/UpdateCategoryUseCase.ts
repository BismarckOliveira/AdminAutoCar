import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name?: string;
  description?: string;
  id: string;
}

@injectable()
class UpdateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  async execute({ id, name }: IRequest) {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new AppError("Category dos not Exists");
    }

    await this.categoryRepository.updateName({ id, name });
  }
}

export { UpdateCategoryUseCase };
