"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductByIdService = exports.updateProductService = exports.getFeaturedProducts = exports.getSingleProductService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const product_model_1 = __importDefault(require("./product.model"));
const createProductService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(payload);
    return result;
});
const getAllProductService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { min, max, category, searchTerm } = query;
    const minPrice = min ? parseInt(min) : 0;
    const maxPrice = max ? parseInt(max) : 0;
    const filter = {};
    const categoryArr = category ? category.trim().split(",") : [];
    if (minPrice && maxPrice) {
        filter.price = { $gte: minPrice, $lte: maxPrice };
    }
    else if (minPrice) {
        filter.price = { $gte: minPrice };
    }
    else if (maxPrice) {
        filter.price = { $lte: maxPrice };
    }
    if (category && category !== " ") {
        filter.category = {
            $in: categoryArr.map((cat) => new RegExp(`^${cat}$`, "i")),
        };
    }
    const queryModel = product_model_1.default.find(filter);
    const queryBuild = new QueryBuilder_1.default(queryModel, query)
        .paginate()
        .sort()
        .search(["title"]);
    const result = yield queryBuild.modelQuery;
    if (searchTerm) {
        filter.title = { $regex: searchTerm, $options: "i" };
    }
    const totalDoc = yield product_model_1.default.countDocuments(filter);
    return { result, totalDoc };
});
const getSingleProductService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findById(id);
    return result;
});
exports.getSingleProductService = getSingleProductService;
const getFeaturedProducts = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const limit = Number(query.limit || 4);
    const result = yield product_model_1.default.find().sort({ createdAt: -1 }).limit(limit);
    return result;
});
exports.getFeaturedProducts = getFeaturedProducts;
const updateProductService = (payload, productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndUpdate(productId, payload, {
        new: true,
    });
    return result;
});
exports.updateProductService = updateProductService;
const deleteProductByIdService = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndDelete(productId);
    return result;
});
exports.deleteProductByIdService = deleteProductByIdService;
const productService = {
    createProductService,
    getAllProductService,
    getSingleProductService: exports.getSingleProductService,
    updateProductService: exports.updateProductService,
    deleteProductByIdService: exports.deleteProductByIdService,
};
exports.default = productService;
