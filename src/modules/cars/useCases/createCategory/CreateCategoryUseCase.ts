import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const nameAlreadyExists = this.categoriesRepository.findByName(name);

    if (nameAlreadyExists) {
      throw new Error("Name Already Exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
