import type { H3Event } from "h3";
import Client from "~/utils/fetch-client";

// server composable for calling the external API through Nitro Server
export const serverApi = (event: H3Event) => {
  const apiUrl = useRuntimeConfig().public.api_url;
  const accessToken = getCookie(event, "access_token");
  console.log("accessToken:", accessToken);
  const client = new Client(apiUrl as string, {
    headers: {
      Cookie: `access_token=${accessToken}`,
    } as HeadersInit,
  });

  return client;
};
