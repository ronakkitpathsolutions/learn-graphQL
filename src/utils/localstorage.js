export const getDataFromLocal = key => localStorage.getItem(key)
export const setDataFromLocal = (key, data) => localStorage.setItem(key, data)
export const removeDataFromLocal = key => localStorage.removeItem(key)
export const clearDataFromLocal = () => localStorage.clear()