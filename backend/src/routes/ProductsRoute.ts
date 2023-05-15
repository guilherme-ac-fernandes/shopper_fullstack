import { Router } from 'express';
import ProductsModel from '../models/ProductsModel';
import ProductsService from '../services/ProductsService';
import ProductsController from '../controllers/ProductsController';
import Middlewares from '../middlewares';

const route = Router();

const productModel = new ProductsModel();
const productService = new ProductsService(productModel);
const productController = new ProductsController(productService);

route.get(
  '/:productCode',
  (req, res, next) => productController.findByCode(req, res, next),
);

route.get(
  '/',
  (req, res, next) => productController.findAll(req, res, next),
);

route.post(
  '/',
  Middlewares.validateProduct,
  (req, res, next) => productController.create(req, res, next),
);

route.patch(
  '/',
  Middlewares.validateUpdate,
  Middlewares.hasPacksToUpdate,
  (req, res, next) => productController.updateSales(req, res, next),
);

export default route;
