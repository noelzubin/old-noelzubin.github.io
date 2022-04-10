export const getItem = (key: string) =>
  typeof window !== "undefined" && localStorage.getItem(key);

export const setItem = (key: string, val: any) =>
  typeof window !== "undefined" && localStorage.setItem(key, val);
