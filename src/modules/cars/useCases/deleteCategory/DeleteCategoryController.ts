import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const deleteCategoryUseCase = container.resolve(DeleteCategoryUseCase);

    await deleteCategoryUseCase.execute(name);

    return response.status(200).send();
  }
}

export { DeleteCategoryController };
