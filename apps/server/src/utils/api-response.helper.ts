import {
    ErrorResponse,
    ErrorType,
    PaginatedResponse,
    PaginationMeta,
    SuccessResponse,
    ValidationError
} from '@repo/core/types/api-response.types';
import { Response } from 'express';

export class ApiResponseHelper {
  private static createTimestamp(): string {
    return new Date().toISOString();
  }

  static success<T>(
    res: Response,
    data: T,
    message: string = 'Operação realizada com sucesso',
    statusCode: number = 200
  ): Response<SuccessResponse<T>> {
    const response: SuccessResponse<T> = {
      success: true,
      message,
      code: statusCode,
      timestamp: this.createTimestamp(),
      data
    };

    return res.status(statusCode).json(response);
  }

  static successWithPagination<T>(
    res: Response,
    data: T[],
    meta: PaginationMeta,
    message: string = 'Dados recuperados com sucesso',
    statusCode: number = 200
  ): Response<PaginatedResponse<T>> {
    const response: PaginatedResponse<T> = {
      success: true,
      message,
      code: statusCode,
      timestamp: this.createTimestamp(),
      data,
      meta
    };

    return res.status(statusCode).json(response);
  }

  static error(
    res: Response,
    message: string,
    statusCode: number = 500,
    errorType: ErrorType = 'INTERNAL_ERROR',
    details?: ValidationError[] | Record<string, any>
  ): Response<ErrorResponse> {
    const response: ErrorResponse = {
      success: false,
      message,
      code: statusCode,
      timestamp: this.createTimestamp(),
      data: null,
      error: {
        type: errorType,
        ...(details && { details })
      }
    };

    return res.status(statusCode).json(response);
  }

  static validationError(
    res: Response,
    validationErrors: ValidationError[],
    message: string = 'Dados de entrada inválidos'
  ): Response<ErrorResponse> {
    return this.error(res, message, 400, 'VALIDATION_ERROR', validationErrors);
  }

  static authenticationError(
    res: Response,
    message: string = 'Credenciais inválidas'
  ): Response<ErrorResponse> {
    return this.error(res, message, 401, 'AUTHENTICATION_ERROR');
  }

  static authorizationError(
    res: Response,
    message: string = 'Acesso negado'
  ): Response<ErrorResponse> {
    return this.error(res, message, 403, 'AUTHORIZATION_ERROR');
  }

  static notFound(
    res: Response,
    message: string = 'Recurso não encontrado',
    details?: Record<string, any>
  ): Response<ErrorResponse> {
    return this.error(res, message, 404, 'NOT_FOUND', details);
  }

  static badRequest(
    res: Response,
    message: string = 'Requisição inválida',
    details?: Record<string, any>
  ): Response<ErrorResponse> {
    return this.error(res, message, 400, 'BAD_REQUEST', details);
  }

  static internalError(
    res: Response,
    message: string = 'Erro interno do servidor'
  ): Response<ErrorResponse> {
    return this.error(res, message, 500, 'INTERNAL_ERROR');
  }
}

export const success = ApiResponseHelper.success.bind(ApiResponseHelper);
export const successWithPagination = ApiResponseHelper.successWithPagination.bind(ApiResponseHelper);
export const error = ApiResponseHelper.error.bind(ApiResponseHelper);
export const validationError = ApiResponseHelper.validationError.bind(ApiResponseHelper);
export const authenticationError = ApiResponseHelper.authenticationError.bind(ApiResponseHelper);
export const authorizationError = ApiResponseHelper.authorizationError.bind(ApiResponseHelper);
export const notFound = ApiResponseHelper.notFound.bind(ApiResponseHelper);
export const badRequest = ApiResponseHelper.badRequest.bind(ApiResponseHelper);
export const internalError = ApiResponseHelper.internalError.bind(ApiResponseHelper);