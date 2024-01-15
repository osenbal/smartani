import { useState } from 'react';
import { localStorageOps } from '@/data/localStorage';

export const useLocalStorage = () => {
  const [value, setValue] = useState<string | null>(null);

  const setItem = (key: string, value: string) => {
    localStorageOps.setItem(key, value);
    setValue(value);
  };

  const getItem = (key: string) => {
    const value = localStorageOps.getItem(key);
    setValue(value);
    return value;
  };

  const removeItem = (key: string) => {
    localStorageOps.removeItem(key);
    setValue(null);
  };

  return { value, setItem, getItem, removeItem };
};
