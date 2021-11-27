import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handler(request: Request, response: Response): Promise<Response> {
    const all = await this.listCategoriesUseCase.execute();

    return response.status(200).json({ all });
  }
}

export { ListCategoriesController };
