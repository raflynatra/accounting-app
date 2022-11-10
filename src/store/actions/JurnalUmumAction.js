import axios from "axios";
import { BASE_URL } from "../../utils/Helper";

export const getAllJurnal = async (config) => {
  try {
    let response = await axios.get(`${BASE_URL}/jurnal`, config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getJurnalByKodePerkiraan = async (kodePerkiraan, config) => {
  try {
    let response = await axios.get(
      `${BASE_URL}/jurnal/${kodePerkiraan}`,
      config
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getJurnalByDate = async (date, config) => {
  try {
    let response = await axios.get(`${BASE_URL}/jurnal/search/${date}`, config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getJurnalPDF = async () => {
  try {
    let response = await axios({
      url: `${BASE_URL}/laporan/jurnal`,
      method: "GET",
      responseType: "blob", // important
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getJurnalPDFByKodePerkiraan = async (kodePerkiraan) => {
  try {
    let response = await axios({
      url: `${BASE_URL}/laporan/jurnal/perkiraan/${kodePerkiraan}`,
      method: "GET",
      responseType: "blob", // important
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getJurnalPDFByDate = async (date) => {
  try {
    let response = await axios({
      url: `${BASE_URL}/laporan/jurnal/${date}`,
      method: "GET",
      responseType: "blob", // important
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const createJurnal = async (data, config) => {
  try {
    let response = await axios.post(`${BASE_URL}/jurnal`, data, config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateJurnal = async (payload, config) => {
  let { _id } = payload;

  try {
    let response = await axios.put(
      `${BASE_URL}/jurnal/${_id}`,
      payload,
      config
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteJurnal = async (id, config) => {
  try {
    let response = await axios.delete(
      `${BASE_URL}/jurnal/delete/${id}`,
      config
    );
    return response;
  } catch (error) {
    console.log(error);
    // return error.response.data;
  }
};
