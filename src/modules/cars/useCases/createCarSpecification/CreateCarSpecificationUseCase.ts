/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

@injectable()
class CreateCarSpecificationUseCase {
  constructor(
    @inject('CarsRepository')
    private repository: ICarsRepository,
    @inject('SpecificationRepository')
    private specificationRepository: ISpecificationsRepository
  ) { }

  async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
    const carsExists = await this.repository.findById(car_id);

    if (!carsExists) {
      throw new AppError("Car does not exists");
    }

    const specifications = await this.specificationRepository.findByIds(
      specifications_id
    );

    carsExists.specifications = specifications;

    await this.repository.create(carsExists);

    return carsExists;
  }
}

export { CreateCarSpecificationUseCase };
