import type { AuthJwt } from "~/generated";
import { serverApi } from "../utils/serverApi";

export default defineEventHandler(async (event): Promise<AuthJwt> => {
  const api = serverApi(event);

  try {
    // Do the actual request to the external API
    const res = await api.get<AuthJwt>("/admins/me");

    return res;
  } catch (err) {
    console.log("err:", err);
    throw createError("An error occurred while fetching the data.");
  }
});
