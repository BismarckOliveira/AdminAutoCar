import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AutenticateUserUseCase";

describe("Authenticate User", () => {
  let userRepositoryInMemory: UserRepositoryInMemory;
  let autheticateUserUseCase: AuthenticateUserUseCase;
  let createUserUseCase: CreateUserUseCase;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    autheticateUserUseCase = new AuthenticateUserUseCase(
      userRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it("Should be abel to Authenticate an User", async () => {
    const user: ICreateUserDTO = {
      name: "Fulano",
      email: "Fulano@gmail.com",
      password: "1234",
      driver_license: "163495",
    };

    await createUserUseCase.execute(user);

    const result = await autheticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("Should not be abel to Authenticate an nonexistent user", async () => {
    expect(async () => {
      await autheticateUserUseCase.execute({
        email: "NãoExisto@gmail.com",
        password: "12345",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be abel to Authenticate whith incorrect password", async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        name: "Fulaninho",
        email: "Fulaninho@gmail.com",
        password: "1234",
        driver_license: "163495",
      };

      await createUserUseCase.execute(user);

      await autheticateUserUseCase.execute({
        email: user.email,
        password: "ERROUU",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be abel to Authenticate whith incorrect Email", async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        name: "Siclano",
        email: "Siclano@gmail.com",
        password: "1234",
        driver_license: "163495",
      };

      await createUserUseCase.execute(user);

      await autheticateUserUseCase.execute({
        email: "FulanoErrou@gmail.com",
        password: user.password,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
