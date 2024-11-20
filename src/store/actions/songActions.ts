import {
  createSong,
  deleteSong,
  getAllSong,
  getSongByArtist,
  getSongByGenre,
  getSongById,
  searchItem,
  updateSong,
} from "../../apis/song";

export const GETALLSONG_REQUEST = "GETALLSONG_REQUEST";
export const GETALLSONG_SUCCESS = "GETALLSONG_SUCCESS";
export const GETALLSONG_FAILURE = "GETALLSONG_FAILURE";

export const CREATESONG_REQUEST = "CREATESONG_REQUEST";
export const CREATESONG_SUCCESS = "CREATESONG_SUCCESS";
export const CREATESONG_FAILURE = "CREATESONG_FAILURE";

export const DELETESONG_REQUEST = "DELETESONG_REQUEST";
export const DELETESONG_SUCCESS = "DELETESONG_SUCCESS";
export const DELETESONG_FAILURE = "DELETESONG_FAILURE";

export const getAllSongAction = () => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: GETALLSONG_REQUEST });
      const response = await getAllSong();
      dispatch({ type: GETALLSONG_SUCCESS, payload: response.data.content });
    } catch (error: any) {
      dispatch({
        type: GETALLSONG_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};

export const createSongAction = (data: any) => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: CREATESONG_REQUEST });
      const response = await createSong(data);
      dispatch({ type: CREATESONG_SUCCESS, payload: response.data.content });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: CREATESONG_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

export const deleteSongAction = (id: string) => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: DELETESONG_REQUEST });
      await deleteSong(id);
      dispatch({ type: DELETESONG_SUCCESS, payload: { id } });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: DELETESONG_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};
