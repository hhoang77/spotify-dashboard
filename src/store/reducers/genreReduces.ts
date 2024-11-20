import {
  GETALLGENRE_REQUEST,
  GETALLGENRE_SUCCESS,
  GETALLLGENRE_FAILURE,
} from "../actions/genreActions";

interface genreSate {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: genreSate = {
  data: [],
  loading: false,
  error: null,
};

const genreReduce = (state = initialState, action: any) => {
  // console.log(action);

  switch (action.type) {
    case GETALLGENRE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GETALLGENRE_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    case GETALLLGENRE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    default:
      return state;
  }
};

export default genreReduce;
