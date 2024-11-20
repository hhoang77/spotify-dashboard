import { useDispatch, useSelector } from "react-redux";
import { getAllGenreAction } from "../../store/actions/genreActions";
import { getAllArtistAction } from "../../store/actions/artistActions";
import { createSongAction } from "../../store/actions/songActions";
import { RootState, AppDispatch } from "../../store/reducers/index";
import { useEffect } from "react";
import { useFormik } from "formik";
import { songValidate } from "../../validations/song";
import { toast } from "react-toastify";

interface dataSong {
  name: string;
  image: File | null;
  audio: File | null;
  artistId: string;
  genreId: string;
  lyrics: string;
}

function Song() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllGenreAction());
    dispatch(getAllArtistAction());
  }, [dispatch]);
  const genre = useSelector((state: RootState) => state.genre);
  const artist = useSelector((state: RootState) => state.artist);

  const formik = useFormik<dataSong>({
    initialValues: {
      name: "",
      image: null,
      audio: null,
      artistId: "",
      genreId: "",
      lyrics: "",
    },
    validationSchema: songValidate.createSong,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      if (values.image) {
        formData.append("image", values.image);
      }
      if (values.audio) {
        formData.append("audio", values.audio);
      }
      formData.append("artistId", values.artistId);
      formData.append("genreId", values.genreId);
      formData.append("lyrics", values.lyrics);

      dispatch(createSongAction(formData));
      formik.resetForm();
      toast.success("Thêm mới thành công");
    },
  });

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded shadow-md max-w-xl w-full mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Song</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Tên Bài Hát
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 p-2 w-full border rounded-md"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 mb-2 text-center">
                  {formik.errors.name}
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Hình ảnh
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    formik.setFieldValue("image", file);
                  }
                }}
                onBlur={formik.handleBlur}
                className="mt-1 p-2 w-full border rounded-md"
              />
              {formik.touched.audio && formik.errors.audio && (
                <div className="text-red-500 mb-2 text-center">
                  {formik.errors.audio}
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="audio"
                className="block text-sm font-medium text-gray-700"
              >
                Audio
              </label>
              <input
                type="file"
                id="audio"
                name="audio"
                accept=".mp3"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    formik.setFieldValue("audio", file);
                  }
                }}
                onBlur={formik.handleBlur}
                className="mt-1 p-2 w-full border rounded-md"
              />
              {formik.touched.audio && formik.errors.audio && (
                <div className="text-red-500 mb-2 text-center">
                  {formik.errors.audio}
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="artistId"
                className="block text-sm font-medium text-gray-700"
              >
                Ca Sĩ
              </label>
              <select
                id="artistId"
                name="artistId"
                value={formik.values.artistId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Chọn Ca Sĩ</option>
                {artist.data.length > 0 &&
                  artist.data.map((item: any, index: number) => (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="genreId"
                className="block text-sm font-medium text-gray-700"
              >
                Thể Loại Nhạc
              </label>
              <select
                id="genreId"
                name="genreId"
                value={formik.values.genreId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Chọn Thể Loại Nhạc</option>
                {genre.data.length > 0 &&
                  genre.data.map((item: any, index: number) => (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="lyrics"
              className="block text-sm font-medium text-gray-700"
            >
              Lyrics
            </label>
            <textarea
              id="lyrics"
              name="lyrics"
              value={formik.values.lyrics}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="h-32 mt-2 block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            />
            {formik.touched.lyrics && formik.errors.lyrics && (
              <div className="text-red-500 mb-2 text-center">
                {formik.errors.lyrics}
              </div>
            )}
          </div>

          <div className="mt-6 grid grid-cols-4 gap-4 ">
            <div>
              <button
                type="button"
                className="w-full p-3 bg-red-500 text-white rounded-md hover:bg-red-600 font-semibold"
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-semibold"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Song;
