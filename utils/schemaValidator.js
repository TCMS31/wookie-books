module.exports = (schema) => (req,res,next) => {
  const {error} = schema.validate(req.body)
  if(error) {
    res.send(error)
  }else{
    next()
  }
}