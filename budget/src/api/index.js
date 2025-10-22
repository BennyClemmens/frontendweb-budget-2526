import axios from 'axios';

const baseUrl = 'http://localhost:3000/api';

export const getAll = async (url) => {
  const response = await axios.get(`${baseUrl}/${url}`);
  return response.data.items;
};
