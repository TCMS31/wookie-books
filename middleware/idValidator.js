const mongoose = require("mongoose");

module.exports = (req, res, next) => {
  if(mongoose.Types.ObjectId.isValid(req.params.id)){
    next()
  }else{
    res.status(404).send({message:"Resource not found"})
  }
};
