import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCarsUseCase } from "./listCarsUseCase";

class ListCarsController {
  async handler(request: Request, response: Response) {
    const listCarsUseCase = container.resolve(ListCarsUseCase);
    const cars = await listCarsUseCase.execute();
    return response.status(200).json(cars);
  }
}

export { ListCarsController };
