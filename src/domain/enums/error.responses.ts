const ErrorResponses = {
    INTERNAL_ERROR: {
        message: "Internal server error",
        code: 500
    },
    BAD_PARAMS: {
        message: "Bad request or corrupt",
        code: 400
    },
    UNAUTHORIZED: {
        message: "Unauthorized",
        code: 401
    },
    NOT_FOUND: {
        message: "Not found",
        code: 404
    },
    DEFAULT_ERROR: {
        message: "Unknow error",
        code: 500
    }
};

export default ErrorResponses;