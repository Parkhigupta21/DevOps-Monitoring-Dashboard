const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  console.error(`[Error] ${err.message}`);
  res.status(status).json({
    success: false,
    message: err.message || 'Internal server error'
  });
};
module.exports = errorHandler;