import { FetchError, type FetchOptions } from "ofetch";
import type { ApiErrorType, ApiResponse, Result } from "~/types/base.type";
import type { EventHandlerRequest, H3Event } from "h3"; // Ensure this is the correct module for EventHandlerRequest
export class ApiError extends Error {
  statusCode: number;
  statusMessage: string;
  data?: unknown;

  constructor(error: FetchError) {
    super(error.message);
    this.name = "ApiError";
    this.statusCode = error.statusCode || 500;
    this.statusMessage = error.statusMessage || "Internal Server Error";
    this.data = error.data;
  }
}

export default class Client {
  options?: FetchOptions;
  baseUrl: string;

  constructor(baseUrl: string, options?: FetchOptions) {
    this.options = options;
    this.baseUrl = baseUrl;
  }

  private async handleRequest<T>(
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
    requestEvent: H3Event<EventHandlerRequest>,
    options?: FetchOptions
  ): Promise<Result<T>> {
    try {
      const response = await $fetch.raw<ApiResponse<T>>(
        `${this.baseUrl}${url}`,
        {
          ...options,
          ...this.options,
          method,
        }
      );
      if (requestEvent) {
        const cookies = response.headers.getSetCookie();
        for (const cookie of cookies) {
          appendHeader(requestEvent, "set-cookie", cookie);
        }
      }

      const responseData = response._data;
      if (!response.ok) {
        return {
          data: null,
          error: responseData as ApiErrorType,
        };
      } else {
        const { data } = responseData as { data: T };
        return {
          data: data as T,
          error: null,
        };
      }
    } catch (error: unknown) {
      if (error instanceof FetchError) {
        return {
          data: null,
          error: {
            error: error.data.error,
            message: error.data.message,
            statusCode: error.data.statusCode,
          },
        };
      }
      throw createError(error instanceof Error ? error.message : String(error));
    }
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
    requestEvent: H3Event<EventHandlerRequest>,
    options?: FetchOptions
  ) {
    return this.handleRequest<T>(url, method, requestEvent, options);
  }

  async post<T>(
    url: string,
    requestEvent: H3Event<EventHandlerRequest>,
    options?: FetchOptions
  ) {
    return this.handleRequest<T>(url, "POST", requestEvent, options);
  }

  async get<T>(
    url: string,
    requestEvent: H3Event<EventHandlerRequest>,
    options?: FetchOptions
  ) {
    return this.handleRequest<T>(url, "GET", requestEvent, options);
  }

  async put<T>(
    url: string,
    requestEvent: H3Event<EventHandlerRequest>,
    options?: FetchOptions
  ) {
    return this.handleRequest<T>(url, "PUT", requestEvent, options);
  }

  async delete<T>(
    url: string,
    requestEvent: H3Event<EventHandlerRequest>,

    options?: FetchOptions
  ): Promise<Result<T>> {
    return this.handleRequest<T>(url, "DELETE", requestEvent, options);
  }
}
