import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { carsRoutes } from "./cars.routes";
import { categoriesRoute } from "./categories.routes";
import { rentalRoutes } from "./rental.routes";
import { especificationRouter } from "./specifications.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/cars", carsRoutes);
router.use("/categories", categoriesRoute);
router.use("/specifications", especificationRouter);
router.use("/rental", rentalRoutes);

router.use(authenticateRoutes);

export { router };
