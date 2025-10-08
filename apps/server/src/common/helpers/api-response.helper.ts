import { HttpException, Injectable } from '@nestjs/common';
import {
    ErrorResponse,
    ErrorType,
    PaginatedResponse,
    PaginationMeta,
    SuccessResponse,
    ValidationError
} from '@repo/core/types/api-response.types';

@Injectable()
export class ApiResponseHelper {
  private static createTimestamp(): string {
    return new Date().toISOString();
  }

  success<T>(
    data: T,
    message: string = 'Operação realizada com sucesso',
    statusCode: number = 200
  ): SuccessResponse<T> {
    return {
      success: true,
      message,
      code: statusCode,
      timestamp: ApiResponseHelper.createTimestamp(),
      data
    };
  }

  successWithPagination<T>(
    data: T[],
    meta: PaginationMeta,
    message: string = 'Dados recuperados com sucesso',
    statusCode: number = 200
  ): PaginatedResponse<T> {
    return {
      success: true,
      message,
      code: statusCode,
      timestamp: ApiResponseHelper.createTimestamp(),
      data,
      meta
    };
  }

  error(
    message: string,
    statusCode: number = 500,
    errorType: ErrorType = 'INTERNAL_ERROR',
    details?: ValidationError[] | Record<string, any>
  ): never {
    const response: ErrorResponse = {
      success: false,
      message,
      code: statusCode,
      timestamp: ApiResponseHelper.createTimestamp(),
      data: null,
      error: {
        type: errorType,
        ...(details && { details })
      }
    };

    throw new HttpException(response, statusCode);
  }

  validationError(
    validationErrors: ValidationError[],
    message: string = 'Dados de entrada inválidos'
  ): never {
    this.error(message, 400, 'VALIDATION_ERROR', validationErrors);
  }

  authenticationError(
    message: string = 'Credenciais inválidas'
  ): never {
    this.error(message, 401, 'AUTHENTICATION_ERROR');
  }

  authorizationError(
    message: string = 'Acesso negado'
  ): never {
    this.error(message, 403, 'AUTHORIZATION_ERROR');
  }

  notFound(
    message: string = 'Recurso não encontrado',
    details?: Record<string, any>
  ): never {
    this.error(message, 404, 'NOT_FOUND', details);
  }

  badRequest(
    message: string = 'Requisição inválida',
    details?: Record<string, any>
  ): never {
    this.error(message, 400, 'BAD_REQUEST', details);
  }

  internalError(
    message: string = 'Erro interno do servidor'
  ): never {
    this.error(message, 500, 'INTERNAL_ERROR');
  }
}