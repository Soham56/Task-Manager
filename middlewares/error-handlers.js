const {CustomAPIError} = require('../errors/customErrors');

const errorHandlers = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message});
    }
    res.status(500).json({msg: "Something went wrong, try again later"});
}

module.exports = errorHandlers;