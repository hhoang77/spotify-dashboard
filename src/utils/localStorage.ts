export const setLocalStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = <T>(key: string): T | null => {
  const value = localStorage.getItem(key);
  return value ? (JSON.parse(value) as T) : null;
};

export const clearLocalStorage = (): void => {
  return localStorage.clear();
};
