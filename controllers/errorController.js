module.exports = (err, req, res, next) => {
//  #mongoose_duplicated:
    if (err.code === 11000) {
        err.statusCode = 404;
        err.message = 'Email address in already in use.';
    }

//  #mongoose_validators:
    if (err.name === 'ValidationError') {
        err.message = (Object.values(err.errors).map(el => el.message));
        err.statusCode = 404;
    }

//  #defaults:
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

//  #response:
    res.status(err.statusCode).json({
        status: err.status,
        statusCode: err.statusCode,
        message: err.message,
        stack: err.stack
    });
}