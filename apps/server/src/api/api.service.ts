import { Injectable } from '@nestjs/common';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

@Injectable()
export class ApiService {
    private readonly axiosInstance: AxiosInstance

    constructor(){
        this.axiosInstance = axios.create()
        this.axiosInstance.interceptors.request.use(this.handleRequest);
        this.axiosInstance.interceptors.response.use(this.handleResponse, this.handleErrorResponse);
    }

    private handleRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    console.info(`HTTP Request: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    return config;
  }

  private handleResponse(response: AxiosResponse): AxiosResponse {
    console.info(
      `HTTP Response: ${response.status} ${response.config.method?.toUpperCase()} ${response.config.baseURL}${
        response.config.url
      }`,
    );
    return response;
  }

  private handleErrorResponse(error: AxiosError): Promise<AxiosError> {
    console.error(`HTTP Error: ${error.message}`, { error });
    return Promise.reject(error);
  }

  async request<T>(method: 'get' | 'post' | 'put' | 'patch' | 'delete', url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.request<T>({
      method,
      url,
      data,
      ...config,
    });
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>('get', url, undefined, config);
  }

  async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>('post', url, data, config);
  }

  async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>('put', url, data, config);
  }

  async patch<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>('patch', url, data, config);
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>('delete', url, undefined, config);
  }

  setBaseURL(baseURL: string) {
    this.axiosInstance.defaults.baseURL = baseURL;
  }

  setDefaultParams(params: Record<string, any>) {
    this.axiosInstance.defaults.params = params;
  }

  setDefaultHeaders(headers: Record<string, string>) {
    Object.assign(this.axiosInstance.defaults.headers.common, headers);
  }
}
