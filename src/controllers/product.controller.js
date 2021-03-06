import models from "../models/models";
const { Product, Category } = models;

export default {
  add: async (req, res, next) => {
    try {
      console.log(req.body);
      const reg = await Product.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar crear producto",
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      const reg = await Product.find().populate("categories", { name: 1 });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar listar",
      });
      next(e);
    }
  },
  query: async (req, res, next) => {
    try {
    } catch (e) {}
  },
  update: async (req, res, next) => {
    try {
    } catch (e) {}
  },
  addCategory: async (req, res, next) => {
    try {
      const addCategory = await Product.findOne(
        { _id: req.body._id },
        (err, result) => {
          try {
            result.categories.push(req.body.id_category);
            result.save();
          } catch (e) {
            console.log(e);
            next(e);
          }
        }
      )
        .clone()
        .catch((err) => {
          console.log(err);
        });
      const addedProduct = await Category.findOne(
        { _id: req.body.id_category },
        (err, result) => {
          try {
            result.products.push(req.body._id);
            result.save();
          } catch (e) {
            console.log(e);
            next(e);
          }
        }
      )
        .clone()
        .catch((err) => {
          console.log(err);
        });

      res.status(200).json(addedProduct);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar agregar categoria",
      });
      next(e);
    }
  },
  removeCategory: async (req, res, next) => {
    try {
      const removedCategory = await Product.findOne(
        { _id: req.body._id },
        (err, result) => {
          try {
            result.categories.pull(req.body.id_category);
            result.save();
          } catch (e) {
            console.log(e);
            next(e);
          }
        }
      )
        .clone()
        .catch((err) => {
          console.log(err);
        });
      const removedProduct = await Category.findOne(
        { _id: req.body.id_category },
        (err, result) => {
          try {
            result.products.pull(req.body._id);
            result.save();
          } catch (e) {
            console.log(e);
            next(e);
          }
        }
      )
        .clone()
        .catch((err) => {
          console.log(err);
        });

      res.status(200).json(removedCategory);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar quitar categoria",
      });
      next(e);
    }
  },

  activate: async (req, res, next) => {
    try {
    } catch (e) {}
  },
  deactivate: async (req, res, next) => {
    try {
    } catch (e) {}
  },
  remove: async (req, res, next) => {
    try {
    } catch (e) {}
  },
};
