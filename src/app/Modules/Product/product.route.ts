import { Router } from "express";
import { validSchema } from "../../middlewere/validator";
import { createProduct, getAllProduct } from "./product.controller";
import { productValidationSchema } from "./product.validation";
const router = Router();
router.get("/", getAllProduct);
router.post("/create", validSchema(productValidationSchema), createProduct);
export const ProductRoutes = router;
