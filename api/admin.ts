import type { Login } from "~/dto/auth.type";
import type { AdminDto } from "~/generated";

// export const adminLogin = async (payload: Login) => {
//   const data = await fetchApi.post<AuthJwt>("/admins/login", payload);
//   return data;
// };

export const adminLogin = async (payload: Login) => {
  return await $fetch("/api/auth/login", {
    body: {
      email: payload.email,
      password: payload.password,
      otp: payload.otp,
    },
    method: "POST",
  });
};

export const getAllAdmins = async () => {
  const data = await useApi<AdminDto[]>("/admins", {
    key: "all-admins",
  });
  return data;
};

export const getMe = async () => {
  return await useFetch("/api/auth/me");
};

export const adminLogout = async () => {
  return await useAsyncData(async () => {
    return await $fetch("/api/auth/logout", {
      method: "POST",
    });
  });
};
