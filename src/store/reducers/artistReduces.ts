import {
  GETALLARTIST_FAILURE,
  GETALLARTIST_SUCCESS,
  GETALLARTIST_REQUEST,
  CREATEARTIST_FAILURE,
  CREATEARTIST_REQUESR,
  CREATEARTIST_SUCCESS,
} from "../actions/artistActions";

interface artistSate {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: artistSate = {
  data: [],
  loading: false,
  error: null,
};

const artistReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GETALLARTIST_REQUEST:
    case CREATEARTIST_REQUESR:
      return {
        ...state,
        loading: true,
      };
    case GETALLARTIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case CREATEARTIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
      };
    case GETALLARTIST_FAILURE:
    case CREATEARTIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default artistReducer;
