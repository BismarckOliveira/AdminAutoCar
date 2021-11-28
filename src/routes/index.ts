import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoute } from "./categories.routes";
import { especificationRouter } from "./specifications.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/categories", categoriesRoute);
router.use("/specifications", especificationRouter);
router.use(authenticateRoutes);

export { router };
