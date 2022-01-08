"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../models/models");

var _default = {
  add: async (req, res, next) => {
    try {
      const reg = await _models.Category.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error al intentar agregar"
      });
      next(e);
    }
  },
  queryById: async (req, res, next) => {
    try {
      const category = await _models.Category.findById(req.params.id).populate("products");

      if (!category) {
        res.status(404).send({
          message: "Categoria no encontrada"
        });
      }

      res.status(200).json(category);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error al intentar consultar categoria por id"
      });
      next(e);
    }
  },
  queryByName: async (req, res, next) => {
    try {
      const category = await _models.Category.find({
        name: req.params.name
      }).populate("products");

      if (!category) {
        res.status(404).send({
          message: "Categoria no encontrada"
        });
      }

      res.status(200).json(category);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error al intentar consultar categoria por nombre"
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      const category = await _models.Category.find().populate("products");
      res.status(200).json(category);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar agregar"
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    const {
      _id,
      name,
      description
    } = req.body;

    try {
      const category = await _models.Category.findByIdAndUpdate({
        _id
      }, {
        name,
        description
      });
      res.status(200).json(category);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar actualizar"
      });
      next(e);
    }
  },
  remove: async (req, res, next) => {
    try {
      const category = await _models.Category.findByIdAndDelete({
        _id: req.body._id
      });
      console.log(category);
      res.status(200).json(category);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar eliminar"
      });
      next(e);
    }
  },
  addProduct: async (req, res, next) => {
    try {
      const addProduct = await _models.Category.findOne({
        _id: req.body._id
      }, (err, result) => {
        try {
          result.products.push(req.body.id_product);
          result.save();
        } catch (e) {
          console.log(e);
          next(e);
        }
      }).clone().catch(err => {
        console.log(err);
      });
      const addCategory = await _models.Product.findOne({
        _id: req.body.id_product
      }, (err, result) => {
        try {
          result.categories.push(req.body._id);
          result.save();
        } catch (e) {
          console.log(e);
          next(e);
        }
      }).clone().catch(err => {
        console.log(err);
      });
      res.status(200).json(addCategory);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar agregar categoria"
      });
      next(e);
    }
  },
  removeProduct: async (req, res, next) => {
    try {
      const removedProduct = await _models.Category.findOne({
        _id: req.body._id
      }, (err, result) => {
        try {
          result.products.pull(req.body.id_product);
          result.save();
        } catch (e) {
          console.log(e);
          next(e);
        }
      }).clone().catch(err => {
        console.log(err);
      });
      const removedCategory = await _models.Product.findOne({
        _id: req.body.id_product
      }, (err, result) => {
        try {
          result.categories.pull(req.body._id);
          result.save();
        } catch (e) {
          console.log(e);
          next(e);
        }
      }).clone().catch(err => {
        console.log(err);
      });
      res.status(200).json(removedCategory);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar quitar categoria"
      });
      next(e);
    }
  },
  activate: async (req, res, next) => {
    try {
      const category = await _models.Category.findByIdAndUpdate({
        _id: req.body._id
      }, {
        state: 1
      });
      res.status(200).json(category);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar activar"
      });
      next(e);
    }
  },
  deactivate: async (req, res, next) => {
    try {
      const category = await _models.Category.findByIdAndUpdate({
        _id: req.body._id
      }, {
        state: 0
      });
      res.status(200).json(category);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar desactivar"
      });
      next(e);
    }
  }
};
exports.default = _default;