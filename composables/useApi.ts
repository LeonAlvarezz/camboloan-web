// composables/useAPIFetch.ts

import { useFetch } from "#app";

type useFetchType = typeof useFetch;

// wrap useFetch with configuration needed to talk to our API
export const useApi: useFetchType = (path, options = {}) => {
  const config = useRuntimeConfig();
  options.baseURL = config.public.api_url;
  return useFetch(path, {
    ...options,
    headers: {
      credential: "true",
    },
    transform: (res: { data: unknown }): unknown => {
      // Handle different response structures
      return res?.data || res;
    },
  });
};
