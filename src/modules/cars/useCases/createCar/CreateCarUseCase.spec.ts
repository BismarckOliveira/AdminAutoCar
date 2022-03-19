import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { CarRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

describe("Create Car", () => {
  let carRepository: CarRepositoryInMemory;
  let createCarUseCase: CreateCarUseCase;

  beforeEach(() => {
    carRepository = new CarRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carRepository);
  });

  it("Should be able to create a new car", async () => {
    const newCar = await createCarUseCase.execute({
      brand: "Name Car",
      category_id: "category",
      daily_rate: 100,
      description: "APOLA 2.0",
      fine_amount: 60,
      license_plate: "kqx-5896",
      name: "opala",
    });
    expect(newCar).toHaveProperty("id");
  });

  it("Should not be able to create a car with exists License plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        brand: "Name Car1",
        category_id: "category",
        daily_rate: 100,
        description: "APOLA 2.0",
        fine_amount: 60,
        license_plate: "kqx-5896",
        name: "opala",
      });

      await createCarUseCase.execute({
        brand: "Name Car2",
        category_id: "category",
        daily_rate: 100,
        description: "APOLA 2.0",
        fine_amount: 60,
        license_plate: "kqx-5896",
        name: "opala",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should be able to creat a car with available true by default.", async () => {
    const car = await createCarUseCase.execute({
      brand: "Car Available",
      category_id: "category",
      daily_rate: 100,
      description: "APOLA 2.0",
      fine_amount: 60,
      license_plate: "kqx-5896",
      name: "opala",
    });

    expect(car.available).toBe(true);
  });
});
