export type ApiResponse<T> = { data: T } | ApiErrorType;

export type ApiErrorType = {
  message: string | string[];
  error: string;
  statusCode: number;
};

export type Result<T> = {
  data: T | null;
  error: ApiErrorType | null;
};
