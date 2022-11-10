import axios from "axios";
import { BASE_URL } from "../../utils/Helper";

export const getAllPerkiraan = async (config) => {
  try {
    let response = await axios.get(`${BASE_URL}/perkiraan`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPerkiraanById = async (id, config) => {
  try {
    let response = await axios.get(`${BASE_URL}/perkiraan/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createPerkiraan = async (data, config) => {
  try {
    let response = await axios.post(`${BASE_URL}/perkiraan`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePerkiraan = async (id, config) => {
  try {
    let response = await axios.put(`${BASE_URL}/perkiraan/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePerkiraan = async (id) => {
  try {
    let response = await axios.delete(`${BASE_URL}/perkiraan/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
