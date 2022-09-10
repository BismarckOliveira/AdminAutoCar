/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { ICarImageRepository } from "@modules/cars/repositories/ICarsImageRepository";

interface IRequest {
  car_id: string;
  images_name: string[];
}

@injectable()
class UploadCarImageUseCase {
  constructor(
    @inject("CarImagesRepository")
    private repository: ICarImageRepository
  ) { }

  async execute({ car_id, images_name }: IRequest) {
    images_name.map(async (image) => {
      await this.repository.create(car_id, image);
    });
  }
}

export { UploadCarImageUseCase };
