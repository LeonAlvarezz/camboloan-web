import type { H3Event } from "h3";
import Client from "~/utils/fetch-client";

// server composable for calling the external API through Nitro Server
export const serverApi = (event: H3Event) => {
  const apiUrl = useRuntimeConfig().public.api_url;
  const admin_cookie = getCookie(event, "admin_cookie");
  const client = new Client(apiUrl as string, {
    headers: {
      Cookie: `admin_cookie=${admin_cookie}`,
    } as HeadersInit,
  });

  return client;
};
