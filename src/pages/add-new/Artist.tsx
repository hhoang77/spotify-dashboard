import { useFormik } from "formik";
import { artistValidate } from "../../validations/artist";
import { AppDispatch } from "../../store/reducers/index";
import { useDispatch } from "react-redux";
import { createArtistAction } from "../../store/actions/artistActions";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface dataArtist {
  name: string;
  avarta: File | null;
  gender: string;
  bio: string;
}

function Artist() {
  const dispatch = useDispatch<AppDispatch>();
  const [preview, setPreview] = useState<string | null>(null);

  const formik = useFormik<dataArtist>({
    initialValues: {
      name: "",
      avarta: null,
      gender: "",
      bio: "",
    },
    validationSchema: artistValidate.createArtist,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      if (values.avarta) {
        formData.append("avarta", values.avarta);
      }
      formData.append("gender", values.gender);
      formData.append("bio", values.bio);

      dispatch(createArtistAction(formData));
      formik.resetForm();
      toast.success("Thêm mới thành công");
    },
  });

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-xl w-full mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Artist</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Tên Nghệ Sĩ
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
                htmlFor="avarta"
                className="block text-sm font-medium text-gray-700"
              >
                Hình ảnh
              </label>
              <input
                type="file"
                id="avarta"
                name="avarta"
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) {
                    setPreview(URL.createObjectURL(file));
                    formik.setFieldValue("avarta", file);
                  }
                }}
                onBlur={formik.handleBlur}
                className="mt-1 p-2 w-full border rounded-md"
              />
              {formik.touched.avarta && formik.errors.avarta && (
                <div className="text-red-500 mb-2 text-center">
                  {formik.errors.avarta}
                </div>
              )}
              {preview && (
                <div className="mt-4">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded"
                  />
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Giới Tính
              </label>
              <select
                id="gender"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Chọn giới tính</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formik.values.bio}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="h-32 mt-2 block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your thoughts here..."
            />
            {formik.touched.bio && formik.errors.bio && (
              <div className="text-red-500 mb-2 text-center">
                {formik.errors.bio}
              </div>
            )}
          </div>
          <div className="mt-8 flex gap-6 justify-end">
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

export default Artist;
