import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

class UpdateCotegoryController {
  async handle(request: Request, response: Response) {
    const { name, id } = request.body;

    const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase);

    await updateCategoryUseCase.execute({ id, name });

    return response.status(200).send();
  }
}

export { UpdateCotegoryController };
