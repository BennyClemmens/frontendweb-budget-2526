import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;

export const getAll = async (url) => {
  const response = await axios.get(`${baseUrl}/${url}`);
  return response.data.items;
};

export const deleteById = async (url, { arg: id }) => {
  await axios.delete(`${baseUrl}/${url}/${id}`);
};
