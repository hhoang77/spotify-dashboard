import {
  GETALLSONG_FAILURE,
  GETALLSONG_REQUEST,
  GETALLSONG_SUCCESS,
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

    case GETALLSONG_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;
