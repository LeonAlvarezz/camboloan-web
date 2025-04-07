import { serverApi } from "../utils/serverApi";

export default defineEventHandler(async (event) => {
  const api = serverApi(event);
  try {
    // Do the actual request to the external API
    const res = await api.raw("/admins/logout", "POST");

    const cookies = res.headers.getSetCookie();

    for (const cookie of cookies) {
      appendHeader(event, "set-cookie", cookie);
    }

    return { message: "success" };
  } catch (err) {
    console.log("err:", err);
    throw createError("An error occurred while fetching the data.");
  }
});
