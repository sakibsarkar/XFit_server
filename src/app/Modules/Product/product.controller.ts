import { catchAsyncError } from "../../../utils/catchAsyncError";
import sendResponse from "../../../utils/sendResponse";
import productService from "./Product.service";

const { createProductService, getAllProductService } = productService;

export const createProduct = catchAsyncError(async (req, res) => {
  const { body } = req;
  const result = await createProductService(body);

  sendResponse(res, {
    message: "product created successfully",
    data: result,
    success: true,
  });
});
export const getAllProduct = catchAsyncError(async (req, res) => {
  const result = await getAllProductService(req.query);

  sendResponse(res, {
    message: "successfully get all product",
    data: result,
    success: true,
  });
});
