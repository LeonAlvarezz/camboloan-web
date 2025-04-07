import type { Admin } from "~/types/admin.type";
import { serverApi } from "../utils/serverApi";
import type { AuthAccessToken } from "~/generated";

export default defineEventHandler(async (event) => {
  const api = serverApi(event);
  const { password, email, otp } = await readBody(event);

  try {
    // Do the actual request to the external API
    const res = await api.raw<Admin & AuthAccessToken>(
      "/admins/login",
      "POST",
      {
        body: {
          password,
          email,
          otp: Number(otp),
        },
      }
    );

    const cookies = res.headers.getSetCookie();

    for (const cookie of cookies) {
      appendHeader(event, "set-cookie", cookie);
    }
    return res._data?.data;
  } catch (err) {
    console.log("err:", err);
    throw createError("An error occurred while fetching the data.");
  }
});
