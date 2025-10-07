import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../errors/http-error';
import { authenticationError, authorizationError, badRequest, error, internalError, notFound } from '../utils/api-response.helper';

export function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error('Erro capturado:', err);

    if (res.headersSent) {
        return next(err);
    }

    if (err instanceof HttpError) {
        // Mapear códigos de status para tipos de erro específicos
        switch (err.statusCode) {
            case 400:
                return badRequest(res, err.message);
            case 401:
                return authenticationError(res, err.message);
            case 403:
                return authorizationError(res, err.message);
            case 404:
                return notFound(res, err.message);
            default:
                return error(res, err.message, err.statusCode);
        }
    }

    console.error('Erro interno do servidor:', err);
    return internalError(res);
}