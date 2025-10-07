import { HttpError } from './http-error'

export class BadRequestError extends HttpError {
    constructor(message: string = 'Bad Request') {
        super(message, 400)
    }
}

export class UnauthorizedError extends HttpError {
    constructor(message: string = 'Unauthorized') {
        super(message, 401)
    }
}

export class ForbiddenError extends HttpError {
    constructor(message: string = 'Forbidden') {
        super(message, 403)
    }
}

export class NotFoundError extends HttpError {
    constructor(message: string = 'Not Found') {
        super(message, 404)
    }
}

export class ConflictError extends HttpError {
    constructor(message: string = 'Conflict') {
        super(message, 409)
    }
}

export class InternalServerError extends HttpError {
    constructor(message: string = 'Internal Server Error') {
        super(message, 500)
    }
}

// === ERROS HTTP PADRÃO ADICIONAIS ===

export class UnprocessableEntityError extends HttpError {
    constructor(message: string = 'Unprocessable Entity') {
        super(message, 422)
    }
}

export class TooManyRequestsError extends HttpError {
    constructor(message: string = 'Too Many Requests') {
        super(message, 429)
    }
}

export class BadGatewayError extends HttpError {
    constructor(message: string = 'Bad Gateway') {
        super(message, 502)
    }
}

export class ServiceUnavailableError extends HttpError {
    constructor(message: string = 'Service Unavailable') {
        super(message, 503)
    }
}

export class GatewayTimeoutError extends HttpError {
    constructor(message: string = 'Gateway Timeout') {
        super(message, 504)
    }
}

export class ValidationError extends HttpError {
    constructor(message: string = 'Validation Error') {
        super(message, 400)
    }
}

export class DatabaseError extends HttpError {
    constructor(message: string = 'Database Error') {
        super(message, 500)
    }
}

export class AuthenticationError extends HttpError {
    constructor(message: string = 'Authentication Failed') {
        super(message, 401)
    }
}

export class AuthorizationError extends HttpError {
    constructor(message: string = 'Insufficient Permissions') {
        super(message, 403)
    }
}

export class RateLimitError extends HttpError {
    constructor(message: string = 'Rate Limit Exceeded') {
        super(message, 429)
    }
}