import { Response, Request } from "express";

import { ListSpecificationUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  async handler(request: Request, response: Response): Promise<Response> {
    const all = await this.listSpecificationUseCase.execute();

    return response.status(200).json({ all });
  }
}

export { ListSpecificationsController };
