import { Router } from 'express';
import PacksModel from '../models/PacksModel';
import PacksService from '../services/PacksService';
import PacksController from '../controllers/PacksController';

const route = Router();

const packsModel = new PacksModel();
const packsService = new PacksService(packsModel);
const packsController = new PacksController(packsService);

route.get(
  '/',
  (req, res, next) => packsController.findAll(req, res, next),
);

export default route;
