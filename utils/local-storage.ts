export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const clearCredential = () => {
  localStorage.removeItem("access-token");
  localStorage.removeItem("admin");
};

export const clearAccessToken = () => {
  localStorage.setItem("access-token", "");
};

export const getAccessToken = () => {
  return localStorage.getItem("access-token");
};

export const setAccessToken = (token: string) => {
  localStorage.setItem("access-token", token);
};
