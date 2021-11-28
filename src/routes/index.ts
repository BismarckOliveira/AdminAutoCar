import { Router } from "express";

import { categoriesRoute } from "./categories.routes";
import { especificationRouter } from "./specifications.routes";

const Routes = Router();

Routes.use("/categories", categoriesRoute);
Routes.use("/specifications", especificationRouter);

export { Routes };
