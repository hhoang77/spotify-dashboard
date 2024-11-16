import {
  login,
  register,
  deteleUser,
  updateRole,
  getAllUser,
} from "../../apis/user";

export const GETALLUSER_REQUEST = "GETALLUSER_REQUEST";
export const GETALLUSER_SUCCESS = "GETALLUSER_SUCCESS";
export const GETALLUSER_FAILURE = "GETALLUSER_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGUT_REQUEST = "LOGUT_REQUEST";
export const LOGUT_SUCCESS = "LOGUT_SUCCESS";
export const LOGUT_FAILURE = "LOGUT_FAILURE";

export const DELETEUSER_REQUEST = "DELETEUSER_REQUEST";
export const DELETEUSER_SUCCESS = "DELETEUSER_SUCCESS";
export const DELETEUSER_FAILURE = "DELETEUSER_FAILURE";

export const getAllUserActions = () => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: GETALLUSER_REQUEST });
      const response = await getAllUser();
      dispatch({ type: GETALLUSER_SUCCESS, payload: response.data.content });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: GETALLUSER_FAILURE,
        payload: error.response.data.content,
      });
    }
  };
};

export const registerUser = (data: any) => {
  return async (dispatch: any) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const response = await register(data);
      dispatch({ type: REGISTER_SUCCESS, payload: response.data.content });
    } catch (error: any) {
      dispatch({ type: REGISTER_FAILURE, payload: error.response.data });
    }
  };
};

export const loginUser = (data: any) => {
  return async (dispatch: any) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await login(data);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.content });
    } catch (error: any) {
      dispatch({ type: LOGIN_FAILURE, payload: error.response.data });
    }
  };
};

export const deleteUser = async (id: string) => {
  return async (dispatch: any) => {
    dispatch({ type: DELETEUSER_REQUEST });
    try {
      const response = await deteleUser(id);
      dispatch({ type: DELETEUSER_SUCCESS, payload: response.data.content });
    } catch (error: any) {
      dispatch({ type: DELETEUSER_FAILURE, payload: error.response.data });
    }
  };
};
