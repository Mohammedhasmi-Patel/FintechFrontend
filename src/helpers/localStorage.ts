const getAccessToken = () => localStorage.getItem("token");

const setAccessToken = (token: string) =>
  localStorage.setItem("token", token);

const clearTokens = () => localStorage.removeItem("token");

export { getAccessToken, setAccessToken, clearTokens };