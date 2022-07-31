import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";

import { CreateCarUseCase } from "../createCar/CreateCarUseCase";
import { ListCarsUseCase } from "./listCarsUseCase";

describe("List Cars ", () => {
  let createCarUseCase: CreateCarUseCase;
  let listCarsUseCase: ListCarsUseCase;
  let repository: ICarsRepository;

  beforeEach(() => {
    repository = new CarRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(repository);
    listCarsUseCase = new ListCarsUseCase(repository);
  });

  it("Should Be Able to list all Cars existents", async () => {
    const car = await createCarUseCase.execute({
      brand: "ford",
      category_id: "Sedan",
      daily_rate: 50,
      description: "Carro economico",
      fine_amount: 100,
      license_plate: "KQX55766",
      name: "Ford KA",
    });

    const cars = await listCarsUseCase.execute();
    expect(cars).toHaveLength(1);
    expect(cars).toEqual([car]);
  });
});
