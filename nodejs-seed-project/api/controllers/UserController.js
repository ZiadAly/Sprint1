 /*const mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),

/*  exports.findByUsername = function(userName, callback){
  User.findOne({ user_name: userName}, function(err, user){
          if(err){
              return callback(err);
          }
  return callback(null, user);
  });
  }

  exports.findById = function(id, callback){
  User.findById(id, function(err, user){
          if(err){
             return callback(err);
          }
           return callback(null, user);
      });
  }*/
/*module.exports.getUser = async (req, res) => {
  if (!Validations.isObjectId(req.params.userId)) {
    return res.status(422).json({
      err: null,
      msg: 'userId parameter must be a valid ObjectId.',
      data: null
    });
  }
  const user = await User.findById(req.params.userId).exec();
  if (!user) {
    return res
      .status(404)
      .json({ err: null, msg: 'Product not found.', data: null });
  }
  res.status(200).json({
    err: null,
    msg: 'user retrieved successfully.',
    data: User
  });
};

module.exports.getUsers = async (req, res) => {
  const user = await User.find({}).exec();
  res.status(200).json({
    err: null,
    msg: 'users retrieved successfully.',
    data: users
  });
};
User = mongoose.model('User');

module.exports.createUser = async (req, res) => {
  const valid =
    req.body.name &&
    Validations.isString(req.body.name) &&
    req.body.password &&
    Validations.isString(req.body.password);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'name(String) and price(password) are required fields.',
      data: null
    });
  }
  // Security Check
  delete req.body.createdAt;
  delete req.body.updatedAt;

  const user = await User.create(req.body);
  res.status(201).json({
    err: null,
    msg: 'Product was created successfully.',
    data: user
  });
};

/*module.exports.updateProduct = async (req, res) => {
  if (!Validations.isObjectId(req.params.productId)) {
    return res.status(422).json({
      err: null,
      msg: 'productId parameter must be a valid ObjectId.',
      data: null
    });
  }
  const valid =
    req.body.name &&
    Validations.isString(req.body.name) &&
    req.body.price &&
    Validations.isNumber(req.body.price);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'name(String) and price(Number) are required fields.',
      data: null
    });
  }
  // Security Check
  delete req.body.createdAt;
  req.body.updatedAt = moment().toDate();

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    {
      $set: req.body
    },
    { new: true }
  ).exec();
  if (!updatedProduct) {
    return res
      .status(404)
      .json({ err: null, msg: 'Product not found.', data: null });
  }
  res.status(200).json({
    err: null,
    msg: 'Product was updated successfully.',
    data: updatedProduct
  });
};

module.exports.deleteProduct = async (req, res) => {
  if (!Validations.isObjectId(req.params.productId)) {
    return res.status(422).json({
      err: null,
      msg: 'productId parameter must be a valid ObjectId.',
      data: null
    });
  }
  const deletedProduct = await Product.findByIdAndRemove(req.params.productId).exec();
  if (!deletedProduct) {
    return res
      .status(404)
      .json({ err: null, msg: 'Product not found.', data: null });
  }
  res.status(200).json({
    err: null,
    msg: 'Product was deleted successfully.',
    data: deletedProduct
  });
};*/
