import type { FetchOptions } from "ofetch";
import type { ApiResponse } from "~/types/base.type";

export default class Client {
  options?: FetchOptions;
  baseUrl: string;

  constructor(baseUrl: string, options?: FetchOptions) {
    this.options = options;
    this.baseUrl = baseUrl;
  }

  async raw<T>(
    url: string,
    method:
      | "GET"
      | "HEAD"
      | "PATCH"
      | "POST"
      | "PUT"
      | "DELETE"
      | "CONNECT"
      | "OPTIONS"
      | "TRACE"
      | "get"
      | "head"
      | "patch"
      | "post"
      | "put"
      | "delete"
      | "connect"
      | "options"
      | "trace"
      | undefined,
    options?: FetchOptions
  ) {
    try {
      const response = await $fetch.raw<ApiResponse<T>>(
        `${this.baseUrl}${url}`,
        {
          ...options,
          ...this.options,
          method,
        }
      );

      return response;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async post<T>(url: string, options?: FetchOptions) {
    try {
      const response = await $fetch<ApiResponse<T>>(`${this.baseUrl}${url}`, {
        ...options,
        ...this.options,
        method: "POST",
      });

      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async get<T>(url: string, options?: FetchOptions): Promise<T> {
    try {
      const response = await $fetch<ApiResponse<T>>(`${this.baseUrl}${url}`, {
        ...options,
        ...this.options,
        method: "GET",
      });
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async put<T>(url: string, options?: FetchOptions) {
    try {
      const response = await $fetch<ApiResponse<T>>(`${this.baseUrl}${url}`, {
        ...options,
        ...this.options,
        method: "PUT",
      });
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async delete<T>(url: string, options?: FetchOptions) {
    try {
      const response = await $fetch<ApiResponse<T>>(`${this.baseUrl}${url}`, {
        ...options,
        ...this.options,
        method: "DELETE",
      });

      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
