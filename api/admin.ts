import type { Login } from "~/dto/auth.type";
import type { AdminDto, AuthenticatedAdminDto, AuthJwt } from "~/generated";

// export const adminLogin = async (payload: Login) => {
//   const data = await fetchApi.post<AuthJwt>("/admins/login", payload);
//   return data;
// };

export const adminLogin = async (payload: Login) => {
  const data = await useApi<AuthenticatedAdminDto>("/admins/login", {
    method: "POST",
    body: {
      ...payload,
      otp: Number(payload.otp),
    },
  });
  return data;
};

export const getAllAdmins = async () => {
  const data = await useApi<AdminDto[]>("/admins", {
    key: "all-admins",
  });
  return data;
};

export const getMe = async () => {
  const data = await useApi<AuthJwt>("/admins/me", {
    key: "admin-auth",
  });
  return data;
};
