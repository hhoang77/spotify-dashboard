import {
  createGenre,
  deleteGenre,
  getAllGenre,
  getGenreById,
  updateGenre,
} from "../../apis/genre";

export const GETALLGENRE_REQUEST = "GETALLGENRE_REQUEST";
export const GETALLGENRE_SUCCESS = "GETALLGENRE_SUCCESS";
export const GETALLLGENRE_FAILURE = "GETALLLGENRE_FAILURE";

export const getAllGenreAction = () => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: GETALLGENRE_REQUEST });
      const response = await getAllGenre();
      dispatch({ type: GETALLGENRE_SUCCESS, payload: response.data.content });
    } catch (error: any) {
      console.log(error);
      dispatch({ type: GETALLLGENRE_FAILURE, payload: error.response.data });
    }
  };
};
