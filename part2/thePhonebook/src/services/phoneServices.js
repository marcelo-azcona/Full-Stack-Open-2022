import axios from 'axios';

const getAll = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const createPhoneNumber = async (url, newNumber) => {
  const response = await axios.post(url, newNumber);
  return response.data;
};

const deletePhoneNumber = async (url) => {
  const response = await axios.delete(url);
  return response.data;
};

const updatePhoneNumber = async (url, updatedNumber) => {
  const response = await axios.put(url, updatedNumber);
  return response.data;
};

export { getAll, createPhoneNumber, deletePhoneNumber, updatePhoneNumber };
