import {
  createArtist,
  deleteArtist,
  getAllArtist,
  getArtistById,
  updateArtist,
} from "../../apis/artist";

export const GETALLARTIST_REQUEST = "GETALLARTIST_REQUEST";
export const GETALLARTIST_SUCCESS = "GETALLARTIST_SUCCESS";
export const GETALLARTIST_FAILURE = "GETALLARTIST_FAILURE";

export const getAllArtistAction = () => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: GETALLARTIST_REQUEST });
      const response = await getAllArtist();
      console.log(response);

      dispatch({ type: GETALLARTIST_SUCCESS, payload: response.data.content });
    } catch (error: any) {
      console.log(error);
      dispatch({ type: GETALLARTIST_FAILURE, payload: error.response.data });
    }
  };
};
