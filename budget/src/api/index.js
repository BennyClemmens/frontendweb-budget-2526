import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;

export const getAll = async (url) => {
  const response = await axios.get(`${baseUrl}/${url}`);
  return response.data.items;
};

export const deleteById = async (url, { arg: id }) => {
  //console.log(`deletebyId aangeroepen met url ${url} en id ${JSON.stringify(id)} als arg`);
  await axios.delete(`${baseUrl}/${url}/${id}`);
};

export const getById = async (url) => {
  const {data} = await axios.get(`${baseUrl}/${url}`);
  return data;
};

export const updateById = async (url, { arg: body }) => {
  const { id, ...values } = body;
  //console.log(`updateById aangeroepen met url ${url} en body ${JSON.stringify(body)} als arg`);
  await axios.put(`${baseUrl}/${url}/${id}`, values);
};

export const save = async (url, { arg: body }) => {
  await axios.post(`${baseUrl}/${url}`, body);
};
