/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse } from '../models/ApiResponse';
import type { Login } from '../models/Login';
import type { Signup } from '../models/Signup';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminService {
    /**
     * Get All Admins
     * @returns any
     * @throws ApiError
     */
    public static adminControllerGetAllV1(): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/admins',
        });
    }
    /**
     * Admin Get Me
     * @returns any
     * @throws ApiError
     */
    public static adminControllerGetMeV1(): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/admins/me',
        });
    }
    /**
     * Admin Signup
     * @returns any
     * @throws ApiError
     */
    public static adminControllerSignupV1({
        requestBody,
    }: {
        requestBody: Signup,
    }): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/admins/signup',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Admin Login
     * @returns any
     * @throws ApiError
     */
    public static adminControllerLoginV1({
        requestBody,
    }: {
        requestBody: Login,
    }): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/admins/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Admin Refresh Token
     * @returns any
     * @throws ApiError
     */
    public static adminControllerRefreshV1(): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/admins/refresh',
        });
    }
}
