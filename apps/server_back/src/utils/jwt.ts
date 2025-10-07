import jwt from 'jsonwebtoken';
import { env } from '../schemas/utils/env.schema';
import { UserRole } from '@repo/db';

interface JWTPayload {
    userId: string,
    role: UserRole,
    organizationId: string
}

export function generateToken(payload: JWTPayload): string {
    return jwt.sign(payload, env.JWT_SECRET, { expiresIn: '1h' });
}

export function verifyToken(token: string): any {
    return jwt.verify(token, env.JWT_SECRET);
}
