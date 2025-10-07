import { UserRole } from "@repo/db";

declare global {
  namespace Express {
    interface Request {
      userId: string;
      organizationId: string;
      role: UserRole
      validatedData: any;
    }
  }
}