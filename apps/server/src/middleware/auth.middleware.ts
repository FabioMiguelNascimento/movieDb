import { NextFunction, Request, Response } from 'express';
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import { UnauthorizedError } from '../errors/index';
import { verifyToken } from '../utils/jwt';

export function authenticate(req: Request, res: Response, next: NextFunction) {
    try {
        const token = (req as any).cookies?.token;

        if (!token) {
            throw new UnauthorizedError('Token não fornecido');
        }

        const payload = verifyToken(token);

        req.userId = payload.userId;
        req.role = payload.role;
        req.organizationId = payload.organizationId;

        next();
    } catch (error) {
        if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
            next(new UnauthorizedError('Token inválido ou expirado'));
        } else {
            next(error);
        }
    }
}