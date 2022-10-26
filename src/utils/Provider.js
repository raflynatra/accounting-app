import { BASE_URL } from "./Helper";
import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": true,
    "Content-Type": "application/json",
    authorization: localStorage.getItem("token"),
  },
};

export const getAllPerkiraan = async () => {
  try {
    let response = await axios.get(`${BASE_URL}/perkiraan`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPerkiraanById = async (id) => {
  try {
    let response = await axios.get(`${BASE_URL}/perkiraan/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createPerkiraan = async (data) => {
  try {
    let response = await axios.post(`${BASE_URL}/perkiraan`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePerkiraan = async (id) => {
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

export const getAllJurnal = async () => {
  try {
    let response = await axios.get(`${BASE_URL}/jurnal`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getJurnalById = async (id) => {
  try {
    let response = await axios.get(`${BASE_URL}/jurnal/${id}`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getJurnalByDate = async (date) => {
  try {
    let response = await axios.get(`${BASE_URL}/jurnal/search/${date}`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getJurnalByMonth = async (date) => {
  try {
    let response = await axios.get(`${BASE_URL}/jurnal/search/${date}`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getJurnalByYear = async (date) => {
  try {
    let response = await axios.get(`${BASE_URL}/jurnal/search/${date}`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createJurnal = async (data) => {
  try {
    let response = await axios.post(`${BASE_URL}/jurnal`, data, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateJurnal = async (payload) => {
  let { _id } = payload;

  try {
    let response = await axios.put(
      `${BASE_URL}/jurnal/${_id}`,
      payload,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteJurnal = async (id) => {
  try {
    let response = await axios.delete(
      `${BASE_URL}/jurnal/delete/${id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllNeraca = async () => {
  try {
    let response = await axios.get(`${BASE_URL}/neraca`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
