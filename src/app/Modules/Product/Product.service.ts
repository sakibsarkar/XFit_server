/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from "../../builder/QueryBuilder";
import Product from "./product.model";
import { IProduct } from "./Prouct.interface";

const createProductService = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductService = async (query: Record<string, unknown>) => {
  const { min, max } = query;
  const minPrice = min ? parseInt(min as string) : 0;
  const maxPrice = max ? parseInt(max as string) : 0;
  const filter: Record<string, any> = {};

  if (min && max) {
    filter.price = { $gte: minPrice, $lte: maxPrice };
  } else if (min) {
    filter.price = { $gte: minPrice };
  } else if (max) {
    filter.price = { $lte: maxPrice };
  }

  const queryModel = Product.find(filter);
  const queryBuild = new QueryBuilder(queryModel, query)
    .paginate()
    .sort()
    .search(["title"]);
  const result = await queryBuild.modelQuery;
  return result;
};

const productService = {
  createProductService,
  getAllProductService,
};
export default productService;
