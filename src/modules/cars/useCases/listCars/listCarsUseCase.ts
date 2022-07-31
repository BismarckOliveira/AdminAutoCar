/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

interface IRequest {
  category_id?: string,
  brand?: string,
  name?: string
}

@injectable()
class ListCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private repository: ICarsRepository
  ) { }

  async execute({ brand, category_id, name }: IRequest) {
    const cars = await this.repository.findAvailable(brand, category_id, name)
    return cars
  }
}

export { ListCarsUseCase };
