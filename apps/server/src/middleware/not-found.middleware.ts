import { Request, Response } from 'express';
import { notFound } from '../utils/api-response.helper';

export const notFoundMiddleware = (req: Request, res: Response) => {
    return notFound(
        res,
        'Rota não encontrada',
        {
            path: req.path,
            method: req.method
        }
    );
}