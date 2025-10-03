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

export interface Movie {
  id: number;
  title: string;
  name?: string;
  poster_path: string;
  overview: string;
  release_date?: string;
  first_air_date?: string;
  genre_ids: number[];
  vote_average: number;
  adult?: boolean;
  backdrop_path?: string;
  video?: boolean;
  vote_count?: number;
  popularity?: number;
  original_language?: string;
  original_title?: string;
  original_name?: string;
}

export interface Genre {
  id: number;
  name: string;
  type: 'movie' | 'tv';
  language: string;
}

export interface MovieDetails {
  id: number
  title?: string
  name?: string
  overview: string
  poster_path: string
  backdrop_path: string
  release_date?: string
  first_air_date?: string
  vote_average: number
  runtime?: number
  tagline?: string
  homepage?: string
  genres: Array<{ id: number; name: string }>
  videos?: {
    results: Array<{
      id: string
      key: string
      name: string
      site: string
      type: string
    }>
  }
  credits?: {
    cast: Array<{
      id: number
      name: string
      character: string
      profile_path: string
    }>
    crew: Array<{
      id: number
      name: string
      job: string
      department: string
    }>
  }
}