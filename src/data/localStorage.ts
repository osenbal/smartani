export const localStorageOps = {
  setItem: (key: string, value: string) => {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.error('Error setting localStorage item:', error);
    }
  },

  getItem: (key: string): string | null => {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      console.error('Error getting localStorage item:', error);
      return null;
    }
  },

  removeItem: (key: string) => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing localStorage item:', error);
    }
  },

  clear: () => {
    try {
      window.localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },
};
