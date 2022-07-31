import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCarsUseCase } from "./listCarsUseCase";

class ListCarsController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { brand, name, category_id } = request.query;
    const listCarsUseCase = container.resolve(ListCarsUseCase);
    const cars = await listCarsUseCase.execute({
      brand: brand as string,
      name: name as string,
      category_id: category_id as string,
    });
    return response.status(200).json(cars);
  }
}

export { ListCarsController };
