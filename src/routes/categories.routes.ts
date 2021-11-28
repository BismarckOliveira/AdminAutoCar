import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import importCategoryController from "../modules/cars/useCases/importCategory";
import listCategoriesController from "../modules/cars/useCases/listCategories";

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

const categoriesRoute = Router();
categoriesRoute.post("/", createCategoryController.handle);

categoriesRoute.post("/import", upload.single("file"), (request, response) => {
  importCategoryController().handle(request, response);
});

categoriesRoute.get("/", (request, response) => {
  return listCategoriesController().handler(request, response);
});

export { categoriesRoute };
