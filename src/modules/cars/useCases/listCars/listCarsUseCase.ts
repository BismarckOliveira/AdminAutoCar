/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

@injectable()
class ListCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private repository: ICarsRepository
  ) { }

  async execute() {
    const cars = await this.repository.list()
    return cars
  }
}

export { ListCarsUseCase };
