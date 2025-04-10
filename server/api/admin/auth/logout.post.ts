import { serverApi } from "~/utils/serverApi";

export default defineEventHandler(async (event) => {
  const api = serverApi(event);
  try {
    // Do the actual request to the external API
    const res = await api.raw("/admins/logout", "POST", event);
    return res;
  } catch (err) {
    console.log("err:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
