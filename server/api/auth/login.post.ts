// login.post.ts
import type { Admin } from "~/types/admin.type";
import { serverApi } from "../utils/serverApi";
import type { AuthAccessToken } from "~/generated";

export default defineEventHandler(async (event) => {
  const api = serverApi(event);
  const { password, email, otp } = await readBody(event);
  const res = await api.raw<Admin & AuthAccessToken>(
    "/admins/login",
    "POST",
    event,
    {
      body: {
        password,
        email,
        otp: Number(otp),
      },
    }
  );
  return res;
});
