import { UserRole } from "@repo/db";
import { NextFunction, Request, Response } from "express";
import { NotFoundError, UnauthorizedError } from '../errors/index';

export const validatePermission = (roles: UserRole[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const role = req.role

        if(!role){
            throw new NotFoundError("Permissao nao encontrada no token")
        }

        const includes = roles.includes(role)

        if (!includes) {
            throw new UnauthorizedError("Voce nao tem permissao para acessar")
        }

        next()
    }
}