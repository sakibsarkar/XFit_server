import { Router } from "express";
import { validSchema } from "../../middlewere/validator";
import { createProduct } from "./product.controller";
import { productValidationSchema } from "./product.validation";
const router = Router();
router.post("/create", validSchema(productValidationSchema), createProduct);
export const ProductRoutes = router;
