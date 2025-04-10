import type { AuthJwt } from "~/generated";
import { serverApi } from "~/utils/serverApi";

export default defineEventHandler(async (event) => {
  const api = serverApi(event);
  const res = await api.get<AuthJwt>("/admins/me", event);
  return res;
});
