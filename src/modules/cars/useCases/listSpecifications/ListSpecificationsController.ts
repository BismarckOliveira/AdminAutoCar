import { Response, Request } from "express";

import { ListSpecificationUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  handler(request: Request, response: Response): Response {
    const all = this.listSpecificationUseCase.execute();

    return response.status(200).json({ all });
  }
}

export { ListSpecificationsController };
