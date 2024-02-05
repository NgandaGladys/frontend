export const saveData = (key, data) => {
  let jsonData = JSON.stringify([...getSavedData(), data]);
  localStorage.setItem(key, jsonData);
};

export const getSavedData = (key) => {
  let formData = localStorage.getItem(key);
  return formData ? JSON.parse(formData)[0] : [];
};
