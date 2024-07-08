import Product from "./product.model";
import { IProduct } from "./Prouct.interface";

const createProductService = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const productService = {
  createProductService,
};
export default productService;
