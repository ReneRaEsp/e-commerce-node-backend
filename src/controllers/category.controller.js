import models from "../models/models";
const { Category } = models;

export default {
  add: async (req, res, next) => {
    try {
      const reg = await Category.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error al intentar agregar",
      });
      next(e);
    }
  },
  queryById: async (req, res, next) => {
    try {
      const category = await Category.findById(req.params.id).populate(
        "products"
      );
      if (!category) {
        res.status(404).send({
          message: "Categoria no encontrada",
        });
      }
      res.status(200).json(category);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error al intentar consultar categoria por id",
      });
      next(e);
    }
  },
  queryByName: async (req, res, next) => {
    try {
      const category = await Category.find({ name: req.params.name }).populate(
        "products"
      );
      if (!category) {
        res.status(404).send({
          message: "Categoria no encontrada",
        });
      }
      res.status(200).json(category);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error al intentar consultar categoria por nombre",
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      const category = await Category.find().populate("products");
      res.status(200).json(category);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar agregar",
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    const { _id, name, description } = req.body;
    try {
      const category = await Category.findByIdAndUpdate(
        { _id },
        {
          name,
          description,
        }
      );
      res.status(200).json(category);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar actualizar",
      });
      next(e);
    }
  },
  remove: async (req, res, next) => {
    try {
      const category = await Category.findByIdAndDelete({ _id: req.body._id });
      console.log(category);
      res.status(200).json(category);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar eliminar",
      });
      next(e);
    }
  },
  activate: async (req, res, next) => {
    try {
      const category = await Category.findByIdAndUpdate(
        { _id: req.body._id },
        { state: 1 }
      );
      res.status(200).json(category);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar activar",
      });
      next(e);
    }
  },
  deactivate: async (req, res, next) => {
    try {
      const category = await Category.findByIdAndUpdate(
        { _id: req.body._id },
        { state: 0 }
      );
      res.status(200).json(category);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar desactivar",
      });
      next(e);
    }
  },
};
