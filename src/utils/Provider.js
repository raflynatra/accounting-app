import { BASE_URL } from "./Helper";
import axios from "axios";

export const getAllPerkiraan = async () => {
  try {
    let response = await axios.get(`${BASE_URL}/perkiraan`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getPerkiraanById = async (id) => {
  try {
    let response = await axios.get(`${BASE_URL}/perkiraan/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createPerkiraan = async (data) => {
  try {
    let response = await axios.post(`${BASE_URL}/perkiraan`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updatePerkiraan = async (id) => {
  try {
    let response = await axios.put(`${BASE_URL}/perkiraan/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deletePerkiraan = async (id) => {
  try {
    let response = await axios.delete(`${BASE_URL}/perkiraan/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllJurnal = async () => {
  try {
    let response = await axios.get(`${BASE_URL}/jurnal`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getJurnalById = async (id) => {
  try {
    let response = await axios.get(`${BASE_URL}/jurnal/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const createJurnal = async (data) => {
  try {
    let response = await axios.post(`${BASE_URL}/jurnal`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateJurnal = async (id) => {
  try {
    let response = await axios.put(`${BASE_URL}/jurnal/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
