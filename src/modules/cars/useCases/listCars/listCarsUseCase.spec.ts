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

  it("Should Be Able to list all Availabel Cars ", async () => {
    const car = await createCarUseCase.execute({
      brand: "ford",
      category_id: "Sedan",
      daily_rate: 50,
      description: "Carro economico",
      fine_amount: 100,
      license_plate: "KQX55766",
      name: "Ford KA",
    });

    const cars = await listCarsUseCase.execute({});
    expect(cars).toHaveLength(1);
    expect(cars).toEqual([car]);
  });

  it("Should Be Able to list all Availabel Cars by brand ", async () => {
    const car = await createCarUseCase.execute({
      brand: "ford2",
      category_id: "Sedan",
      daily_rate: 50,
      description: "Carro economico",
      fine_amount: 100,
      license_plate: "323242",
      name: "Ford KA",
    });

    const cars = await listCarsUseCase.execute({ brand: "ford2" });
    expect(cars).toHaveLength(1);
    expect(cars).toEqual([car]);
  });

  it("Should Be Able to list all Availabel Cars by name ", async () => {
    const car = await createCarUseCase.execute({
      brand: "ford3",
      category_id: "Sedan",
      daily_rate: 50,
      description: "Carro economico",
      fine_amount: 100,
      license_plate: "52353523",
      name: "Ford KA3",
    });

    const cars = await listCarsUseCase.execute({ name: "Ford KA3" });
    expect(cars).toHaveLength(1);
    expect(cars).toEqual([car]);
  });

  it("Should Be Able to list all Availabel Cars by Category ", async () => {
    const car = await createCarUseCase.execute({
      brand: "ford3",
      category_id: "4",
      daily_rate: 50,
      description: "Carro economico",
      fine_amount: 100,
      license_plate: "52353523",
      name: "Ford KA3",
    });

    const cars = await listCarsUseCase.execute({ category_id: "4" });
    expect(cars).toHaveLength(1);
    expect(cars).toEqual([car]);
  });
});
