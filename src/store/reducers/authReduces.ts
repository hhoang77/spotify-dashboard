import {
  //   DELETEUSER_FAILURE,
  //   DELETEUSER_REQUEST,
  //   DELETEUSER_SUCCESS,
  //   LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGUT_FAILURE,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  GETALLUSER_FAILURE,
  GETALLUSER_REQUEST,
  GETALLUSER_SUCCESS,
  UPDATEUSER_FAILURE,
  UPDATEUSER_REQUEST,
  UPDATEUSER_SUCCESS,
} from "../actions/authActions";

interface AuthState {
  user: any;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GETALLUSER_REQUEST:
    case UPDATEUSER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case GETALLUSER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case UPDATEUSER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: state.user.map((u: any) =>
          u._id === action.payload._id ? { ...u, ...action.payload } : u
        ),
      };

    case REGISTER_FAILURE:
    case LOGUT_FAILURE:
    case GETALLUSER_FAILURE:
    case UPDATEUSER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
