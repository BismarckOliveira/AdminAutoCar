import { CarRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";
import { SpecificationRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carRepositoryInMemory: CarRepositoryInMemory;
let specificationRepositoryInMemory: SpecificationRepositoryInMemory;

describe("Create Car Specification", () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarRepositoryInMemory();
    specificationRepositoryInMemory = new SpecificationRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carRepositoryInMemory,
      specificationRepositoryInMemory
    );
  });
  it("Should not be able to add a new specification to a now-existent car ", async () => {
    expect(async () => {
      const car_id = "1234";
      const specifications_id = ["1144"];

      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should be able to add a new specification to the car ", async () => {
    const car = await carRepositoryInMemory.create({
      brand: "Name Car",
      category_id: "category",
      daily_rate: 100,
      description: "APOLA 2.0",
      fine_amount: 60,
      license_plate: "kqx-5896",
      name: "opala",
    });

    const specification = await specificationRepositoryInMemory.create({
      description: "test",
      name: "test",
    });

    const specifications_id = [specification.id];
    await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id,
    });
  });
});
