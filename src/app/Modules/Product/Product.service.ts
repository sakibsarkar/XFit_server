/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from "../../builder/QueryBuilder";
import Product from "./product.model";
import { IProduct } from "./Prouct.interface";

const createProductService = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductService = async (query: Record<string, unknown>) => {
  const { min, max, category } = query;

  const minPrice = min ? parseInt(min as string) : 0;
  const maxPrice = max ? parseInt(max as string) : 0;
  const filter: Record<string, any> = {};
  const categoryArr = category ? (category as string).trim().split(",") : [];

  if (minPrice && maxPrice) {
    filter.price = { $gte: minPrice, $lte: maxPrice };
  } else if (minPrice) {
    filter.price = { $gte: minPrice };
  } else if (maxPrice) {
    filter.price = { $lte: maxPrice };
  }

  if (category && category !== " ") {
    filter.category = {
      $in: categoryArr.map((cat) => new RegExp(`^${cat}$`, "i")),
    };
  }

  const queryModel = Product.find(filter);
  const queryBuild = new QueryBuilder(queryModel, query)
    .paginate()
    .sort()
    .search(["title"]);
  const result = await queryBuild.modelQuery;
  const totalDoc = await Product.countDocuments(filter);
  return { result, totalDoc };
};

const productService = {
  createProductService,
  getAllProductService,
};
export default productService;
