const Product = require("../../models/product");
const APIAggregation = require("../utils/apiFeatures");

exports.putProduct = async (req, res) => {
  Product.updateOne({ _id: req.params.productId }, { ...req.body })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.postProduct = async (req, res) => {
  console.log(req.body, "req Body");
  new Product(req.body)
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.getProducts = async (req, res) => {
  new APIAggregation(Product.aggregate([]), req)
    .apply()
    .then(async (docs) => {
      res.status(200).send(docs);
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      res.send(error);
    });
};

exports.getProductById = (req, res, next) => {
  Product.findOne({ _id: req.params.productId })
    .populate({
      path: "userId",
      select: "-password",
    })
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postFlagProduct = (req, res, next) => {
  Product.updateOne({ _id: req.params.productId }, { flag: req.body.isFlagged })    
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
