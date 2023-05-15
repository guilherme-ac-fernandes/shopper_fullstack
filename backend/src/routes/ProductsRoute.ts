import { Router } from 'express';
import ProductsModel from '../models/ProductsModel';
import ProductsService from '../services/ProductsService';
import ProductsController from '../controllers/ProductsController';

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

export default route;
