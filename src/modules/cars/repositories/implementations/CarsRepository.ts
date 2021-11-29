import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }
  async create({
    brand,
    category_id,
    fine_amount,
    daily_rate,
    description,
    name,
    license_plate,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      brand,
      category_id,
      fine_amount,
      daily_rate,
      description,
      name,
      license_plate,
    });

    await this.repository.save(car);
    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({ license_plate });
    return car;
  }
}

export { CarsRepository };
