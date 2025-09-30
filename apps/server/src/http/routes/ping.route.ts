import prisma from '@repo/db';
import express, { NextFunction, Request, Response, Router } from 'express';
import { success } from '../../utils/api-response.helper';

const router: Router = express.Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await prisma.$queryRaw`SELECT 1`

        return success(
            res,
            {
                status: "OK",
                database: "connected",
                version: "1.0.0"
            },
            "pong",
            200
        );
    } catch (error) {
            next(error)
    }
})

export default router