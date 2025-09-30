export interface BaseApiResponse {
  success: boolean;
  message: string;
  code: number;
  timestamp: string;
}

export interface SuccessResponse<T = any> extends BaseApiResponse {
  success: true;
  data: T;
}

export type ErrorType = 'VALIDATION_ERROR' | 'AUTHENTICATION_ERROR' | 'AUTHORIZATION_ERROR' | 'NOT_FOUND' | 'INTERNAL_ERROR' | 'BAD_REQUEST';

export interface ErrorResponse extends BaseApiResponse {
  success: false;
  data: null;
  error: {
    type: ErrorType;
    details?: ValidationError[] | Record<string, any>;
  };
}

export interface ValidationError {
  field: string;
  message: string;
}

export type ApiResponse<T = any> = SuccessResponse<T> | ErrorResponse;

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> extends SuccessResponse<T[]> {
  meta: PaginationMeta;
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    organizationId?: string;
  };
  token: string;
}

export interface OrganizationResponse {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}