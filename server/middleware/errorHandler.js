//node js has a built-in error handler
const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    return res.status(statusCode).json({message: error.message});
};

module.exports = {
    errorHandler,
}