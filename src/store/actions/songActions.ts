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

export const getAllSongAction = () => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: GETALLSONG_REQUEST });
      const response = await getAllSong();
      dispatch({ type: GETALLSONG_SUCCESS, payload: response.data.content });
    } catch (error: any) {
      dispatch({ type: GETALLSONG_FAILURE, payload: error.response.data });
    }
  };
};
