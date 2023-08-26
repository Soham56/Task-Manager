class CustomAPIError extends Error{
    constructor(message){
        super(message);
        this.statusCode = 404;
    }
}

const createCustomError = (message)=>{
    return new CustomAPIError(message);
}

module.exports = {
    createCustomError,
    CustomAPIError
}