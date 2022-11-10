import axios from "axios";
import { BASE_URL } from "../../utils/Helper";

export const loginUser = (data, config, navigate, from) => {
  return async (dispatch) => {
    try {
      let response = await axios.post(`${BASE_URL}/user/signin`, data, config);

      const accessToken = `JWT ${response.data.accessToken}`;
      localStorage.setItem("token", accessToken);

      dispatch({
        type: "USER_LOGIN",
        payload: {
          data: response.data,
        },
      });

      navigate(from, { replace: true });
    } catch (error) {
      let message =
        typeof error.response.data.message === "string"
          ? error.response.data.message
          : error.response.data.message.message;

      dispatch({
        type: "SET_AUTH_RESPONSE",
        payload: {
          variant: "danger",
          status: "Error",
          statusMessage: message.toLowerCase().includes("password")
            ? "Maaf, password Anda salah. Silakan periksa kembali password Anda"
            : "Username/Password Anda salah. Silakan periksa kembali Username/Password Anda.",
        },
      });
    }
  };
};

export const getAllUser = (config) => {
  return async (dispatch) => {
    // when API load data
    dispatch({
      type: "GET_USER",
      payload: {
        data: Array(3).fill({}),
      },
    });

    try {
      let response = await axios.get(`${BASE_URL}/user`, config);
      dispatch({
        type: "GET_USER",
        payload: {
          data: response.data.data,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_USER",
        payload: {
          data: [],
        },
      });
    }
  };
};

export const createUser = (data, config, navigate) => {
  return async (dispatch) => {
    try {
      let response = await axios.post(`${BASE_URL}/user/signup`, data, config);

      dispatch({
        type: "SET_RESPONSE",
        payload: {
          variant: "success",
          status: "Success",
          statusMessage: `Successfully add user with status code ${response.data.code}`,
        },
      });

      navigate("/master-user");
    } catch (error) {
      let message =
        typeof error.response.data.message === "string"
          ? error.response.data.message
          : error.response.data.message.message;

      dispatch({
        type: "SET_RESPONSE",
        payload: {
          variant: "danger",
          status: "Error",
          statusMessage: message,
        },
      });
    }
  };
};

export const updateUser = (data, id, config, navigate) => {
  return async (dispatch) => {
    try {
      let response = await axios.put(`${BASE_URL}/user/${id}`, data, config);

      dispatch({
        type: "SET_RESPONSE",
        payload: {
          variant: "success",
          status: "Success",
          statusMessage: `Successfully update user with status code ${response.data.code}`,
        },
      });

      navigate("/master-user");
    } catch (error) {
      let message =
        typeof error.response.data.message === "string"
          ? error.response.data.message
          : error.response.data.message.message;

      dispatch({
        type: "SET_RESPONSE",
        payload: {
          variant: "danger",
          status: "Error",
          statusMessage: message,
        },
      });
    }
  };
};

export const deleteUser = (id, config) => {
  return async (dispatch) => {
    try {
      let response = await axios.delete(
        `${BASE_URL}/user/delete/${id}`,
        config
      );

      dispatch({
        type: "DELETE_USER",
        payload: {
          data: id,
        },
      });

      dispatch({
        type: "SET_RESPONSE",
        payload: {
          variant: "success",
          status: "Success",
          statusMessage: `Successfully delete user with status code ${response.data.code}`,
        },
      });
    } catch (error) {
      let message =
        typeof error.response.data.message === "string"
          ? error.response.data.message
          : error.response.data.message.message;

      dispatch({
        type: "SET_RESPONSE",
        payload: {
          variant: "danger",
          status: "Error",
          statusMessage: message,
        },
      });
    }
  };
};
