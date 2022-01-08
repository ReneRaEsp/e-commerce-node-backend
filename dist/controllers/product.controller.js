"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models/models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Product,
  Category
} = _models.default;
var _default = {
  add: async (req, res, next) => {
    try {
      console.log(req.body);
      const reg = await Product.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar crear producto"
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      const reg = await Product.find().populate("categories", {
        name: 1
      });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar listar productos"
      });
      next(e);
    }
  },
  queryById: async (req, res, next) => {
    try {
      const product = await Product.findById({
        _id: req.params.id
      });

      if (!product) {
        res.status(404).send({
          message: "Producto no encontrado"
        });
      }

      res.status(200).json(product);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar buscar producto"
      });
      next(e);
    }
  },
  queryByName: async (req, res, next) => {
    try {
      const product = await Product.find({
        name: req.params.name
      });

      if (!product) {
        res.status(404).send({
          message: "Producto no encontrado"
        });
      }

      res.status(200).json(product);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar buscar producto"
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    const {
      _id,
      name,
      description,
      price,
      stock
    } = req.body;

    try {
      const product = await Product.findByIdAndUpdate({
        _id
      }, {
        name,
        description,
        price,
        stock
      });

      if (!product) {
        res.status(404).send({
          message: "Producto no actualizado"
        });
      }

      res.send(product).json(product);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar buscar producto"
      });
      next(e);
    }
  },
  addCategory: async (req, res, next) => {
    try {
      const addCategory = await Product.findOne({
        _id: req.body._id
      }, (err, result) => {
        try {
          result.categories.push(req.body.id_category);
          result.save();
        } catch (e) {
          console.log(e);
          next(e);
        }
      }).clone().catch(err => {
        console.log(err);
      });
      const addedProduct = await Category.findOne({
        _id: req.body.id_category
      }, (err, result) => {
        try {
          result.products.push(req.body._id);
          result.save();
        } catch (e) {
          console.log(e);
          next(e);
        }
      }).clone().catch(err => {
        console.log(err);
      });
      res.status(200).json(addedProduct);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar agregar categoria"
      });
      next(e);
    }
  },
  removeCategory: async (req, res, next) => {
    try {
      const removedCategory = await Product.findOne({
        _id: req.body._id
      }, (err, result) => {
        try {
          result.categories.pull(req.body.id_category);
          result.save();
        } catch (e) {
          console.log(e);
          next(e);
        }
      }).clone().catch(err => {
        console.log(err);
      });
      const removedProduct = await Category.findOne({
        _id: req.body.id_category
      }, (err, result) => {
        try {
          result.products.pull(req.body._id);
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
      const product = await Product.findByIdAndUpdate({
        _id: req.body._id
      }, {
        state: 1
      });
      res.status(200).json(product);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar activar"
      });
      next(e);
    }
  },
  deactivate: async (req, res, next) => {
    try {
      const product = await Product.findByIdAndUpdate({
        _id: req.body._id
      }, {
        state: 0
      });
      res.status(200).json(product);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar activar"
      });
      next(e);
    }
  },
  remove: async (req, res, next) => {
    try {
      console.log(req.body);
      const product = await Product.findOneAndDelete({
        _id: req.body._id
      });
      console.log(product);
      res.status(200).json(product);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar activar"
      });
      next(e);
    }
  }
};
exports.default = _default;