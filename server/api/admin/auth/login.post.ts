// login.post.ts
import type { Admin } from "~/types/admin.type";
import type { AuthenticatedAdminDto } from "~/generated";
import { serverApi } from "~/utils/serverApi";
import { LoginSchema } from "~/dto/auth.type";

export default defineEventHandler(async (event) => {
  const api = serverApi(event);
  const { password, email, otp } = await readValidatedBody(
    event,
    LoginSchema.parse
  );
  const res = await api.raw<Admin & AuthenticatedAdminDto>(
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
