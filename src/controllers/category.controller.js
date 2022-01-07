import models from "../models/models";
const { Category } = models;

export default {
  add: async (req, res, next) => {
    try {
      const reg = await Category.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar agregar",
      });
      next(e);
    }
  },
  query: async (req, res, next) => {
    //TODO
  },
  queryById: async (req, res, next) => {
    //TODO
  },
  queryByName: async (req, res, next) => {
    //TODO
  },
  list: async (req, res, next) => {
    try {
      const reg = await models.Category.find().populate("products");
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar agregar",
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    //TODO
  },
  remove: async (req, res, next) => {
    //TODO
  },
  activate: async (req, res, next) => {
    //TODO
  },
  deactivate: async (req, res, next) => {
    //TODO
  },
};
