import axios from "axios";
import { PRODUCT_LIST_SUCCESS } from "../constants/productConstants";
import { USER_LOGIN_REQUEST } from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/products",
      { email, password },
      config
    );

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data))
    
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
