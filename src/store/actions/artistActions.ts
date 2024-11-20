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

export const CREATEARTIST_REQUESR = "CREATEARTIST_REQUESR";
export const CREATEARTIST_SUCCESS = "CREATEARTIST_SUCCESS";
export const CREATEARTIST_FAILURE = "CREATEARTIST_FAILURE";

export const getAllArtistAction = () => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: GETALLARTIST_REQUEST });
      const response = await getAllArtist();

      dispatch({ type: GETALLARTIST_SUCCESS, payload: response.data.content });
    } catch (error: any) {
      console.log(error);
      dispatch({ type: GETALLARTIST_FAILURE, payload: error.response.data });
    }
  };
};

export const createArtistAction = (data: any) => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: CREATEARTIST_REQUESR });
      const response = await createArtist(data);
      dispatch({ type: CREATEARTIST_SUCCESS, payload: response.data.content });
    } catch (error: any) {
      console.log(error);
      dispatch({ type: CREATEARTIST_FAILURE, payload: error.response.message });
    }
  };
};
