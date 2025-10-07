import { NextFunction, Request, Response } from "express";
import z, { ZodType, ZodTypeAny } from "zod";
import { internalError, validationError } from "../utils/api-response.helper";

export const validateRequest = (
  schema: ZodType,
  source: "body" | "params" | "query" = "body"
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      let dataToValidate;

      switch (source) {
        case "params":
          if (req.params.key && Array.isArray(req.params.key)) {
            req.params.key = req.params.key.join('/');
          }
          dataToValidate = req.params;
          break;
        case "query":
          dataToValidate = req.query;
          break;
        case "body":
        default:
          dataToValidate = req.body;
          break;
      }

      const validatedDataForSource = schema.parse(dataToValidate);

      if (!req.validatedData) {
        req.validatedData = {};
      }
      
      Object.assign(req.validatedData, validatedDataForSource);

      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));

        return validationError(res, errorMessages);
      }

      console.error("Erro inesperado no middleware de validação:", error);
      return internalError(res);
    }
  };
};

export const validateParams = (schema: ZodTypeAny) =>
  validateRequest(schema, "params");

export const validateQuery = (schema: ZodTypeAny) =>
  validateRequest(schema, "query");

export const validateBody = (schema: ZodTypeAny) =>
  validateRequest(schema, "body");