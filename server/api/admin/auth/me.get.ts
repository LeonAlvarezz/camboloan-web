import type { AuthResponse } from "~/generated";
import { serverApi } from "~/utils/serverApi";

export default defineEventHandler(async (event) => {
  const api = serverApi(event);
  const res = await api.get<AuthResponse>("/admins/me", event);
  return res;
});
