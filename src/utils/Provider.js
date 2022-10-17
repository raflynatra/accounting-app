import { BASE_URL } from "./Helper";
import axios from "axios";

const getAllPerkiraan = async () => {
  try {
    let response = await axios.get(`${BASE_URL}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getPerkiraanById = async (id) => {
  try {
    let response = await axios.get(`${BASE_URL}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createPerkiraan = async (data) => {
  try {
    let response = await axios.post(`${BASE_URL}/`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updatePerkiraan = async (data) => {
  try {
    let response = await axios.put(`${BASE_URL}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deletePerkiraan = async (data) => {
  try {
    let response = await axios.delete(`${BASE_URL}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
