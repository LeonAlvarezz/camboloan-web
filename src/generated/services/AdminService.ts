/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthJwt } from '../models/AuthJwt';
import type { Login } from '../models/Login';
import type { Signup } from '../models/Signup';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminService {
    /**
     * @returns any
     * @throws ApiError
     */
    public static adminControllerGetAllV1(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/admins',
        });
    }
    /**
     * Admin Login
     * @returns AuthJwt Admin Login
     * @throws ApiError
     */
    public static adminControllerGetMeV1(): CancelablePromise<Array<AuthJwt>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/admins/me',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static adminControllerSignupV1({
        requestBody,
    }: {
        requestBody: Signup,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/admins/signup',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static adminControllerLoginV1({
        requestBody,
    }: {
        requestBody: Login,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/admins/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static adminControllerRefreshV1(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/admins/refresh',
        });
    }
}
