import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoryController";
import { DeleteCategoryController } from "@modules/cars/useCases/deleteCategory/DeleteCategoryController";
import { ImportCategoryController } from "@modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/cars/useCases/listCategories/ListCategoriesController";
import { UpdateCotegoryController } from "@modules/cars/useCases/updateCategory/UpdateCategoryController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();
const deleteCategoriesController = new DeleteCategoryController();
const updateCotegoryController = new UpdateCotegoryController();

const categoriesRoute = Router();
categoriesRoute.post("/", createCategoryController.handle);

categoriesRoute.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

categoriesRoute.delete(
  "/",
  ensureAuthenticated,
  deleteCategoriesController.handle
);

categoriesRoute.put("/", ensureAuthenticated, updateCotegoryController.handle);

categoriesRoute.get("/", listCategoriesController.handler);

export { categoriesRoute };
