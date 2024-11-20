import {
  GETALLSONG_FAILURE,
  GETALLSONG_REQUEST,
  GETALLSONG_SUCCESS,
  CREATESONG_SUCCESS,
  CREATESONG_REQUEST,
  CREATESONG_FAILURE,
  DELETESONG_REQUEST,
  DELETESONG_SUCCESS,
  DELETESONG_FAILURE,
} from "../actions/songActions";

interface SongState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: SongState = {
  data: [],
  loading: false,
  error: null,
};

const songReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GETALLSONG_REQUEST:
    case CREATESONG_REQUEST:
    case DELETESONG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GETALLSONG_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case CREATESONG_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
      };
    case DELETESONG_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.filter((item: any) => item._id !== action.payload.id),
      };
    case GETALLSONG_FAILURE:
    case CREATESONG_FAILURE:
    case DELETESONG_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;
