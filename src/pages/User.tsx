import { MdOutlineModeEditOutline, MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUserActions,
  updateUserAction,
} from "../store/actions/authActions";
import { RootState, AppDispatch } from "../store/reducers/index";
import { useEffect, useState } from "react";
import AvartaDeafaute from "../assets/default-avatar-profile.webp";
import Modal from "../components/Modal";
import { useFormik } from "formik";
import { userValidate } from "../validations/user";

interface userState {
  _id?: string;
  email?: string;
  image?: string;
  username: string;
  phone: string;
  favoriteSong?: [
    {
      _id: string;
      name: string;
      image: string;
    }
  ];
  favoriteArtist?: [
    {
      _id: string;
      name: string;
      avarta: string;
    }
  ];
  subscriptionType: string;
  role: string;
}

function User() {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState(false);
  const [idUser, setIdUser] = useState();

  useEffect(() => {
    dispatch(getAllUserActions());
  }, [dispatch]);

  const { user } = useSelector((state: RootState) => state.auth);
  const formik = useFormik<userState>({
    initialValues: {
      username: "",
      phone: "",
      role: "",
      subscriptionType: "",
    },
    validationSchema: userValidate.updateUserByAdmin,
    onSubmit: (values) => {
      dispatch(updateUserAction(idUser, values));
      setIsOpen(false);
    },
  });

  const handleModal = (id: string | undefined) => {
    setIsOpen(!isOpen);
    setIdUser(id);
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-between m-4">
        <div className=" text-2xl font-medium">User</div>
        <div className=" text-2xl font-medium">
          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded"
          >
            Thêm mới
          </a>
        </div>
      </div>
      <div className="relative overflow-x-auto sm:rounded-md my-2 mx-8">
        <table
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
          }}
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-4 py-3 text-center">
                Tên
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Hình Ảnh
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Email
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Số Điện Thoại
              </th>
              {/* <th scope="col" className="px-4 py-3 text-center">
                LikeSongs
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                LikeGenre
              </th> */}
              <th scope="col" className="px-4 py-3 text-center">
                SubscriptionType
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Role
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {user?.length > 0 ? (
              user?.map((item: userState, index: number) => (
                <tr key={index} className="bg-white border-b  ">
                  <td className="px-4 py-4 text-center">{item.username}</td>
                  <td className="px-4 py-4">
                    <img
                      className="w-[200px] h-[200px] object-cover mx-auto"
                      src={item.image !== "" ? item.image : AvartaDeafaute}
                      alt={item._id}
                    />
                  </td>
                  <td className="px-4 py-4 text-center">{item.email}</td>
                  <td className="px-4 py-4 text-center">{item.phone}</td>
                  {/* <td className="px-4 py-4 text-center">
                    [
                    {item.favoriteSong?.length
                      ? item.favoriteSong
                          .map((song: any) => song.name)
                          .join(", ")
                      : ""}
                    ]
                  </td>
                  <td className="px-4 py-4 text-center">
                    [
                    {item.favoriteArtist?.length
                      ? item.favoriteArtist
                          .map((artist: any) => artist.name)
                          .join(", ")
                      : ""}
                    ]
                  </td> */}
                  <td className="px-4 py-4 text-center">
                    {item.subscriptionType}
                  </td>
                  <td className="px-4 py-4 text-center">{item.role}</td>
                  <td className="px-4 py-4 flex gap-1 my-20 mx-auto justify-center">
                    <span
                      onClick={() => handleModal(item._id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:opacity-60 cursor-pointer"
                    >
                      <MdOutlineModeEditOutline className="text-2xl" />
                    </span>
                    <span className="text-red-600 hover:opacity-70 cursor-pointer">
                      <MdDeleteForever className="text-2xl " />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-4 py-4 text-center">
                  No movies available
                </td>
              </tr>
            )}
            {isOpen ? (
              <Modal className="w-2/5" onClose={() => setIsOpen(false)}>
                <div className=" bg-white ">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 my-12">
                      <div>
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Tên Người Dùng
                        </label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="mt-1 p-2 w-full border rounded-md"
                        />
                        {formik.touched.username && formik.errors.username && (
                          <div className="text-red-500 mb-2 text-center">
                            {formik.errors.username}
                          </div>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Số Điện Thoại
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="mt-1 p-2 w-full border rounded-md"
                        />
                        {formik.touched.phone && formik.errors.phone && (
                          <div className="text-red-500 mb-2 text-center">
                            {formik.errors.phone}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="subscriptionType"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Loại Đăng Kí
                        </label>
                        <select
                          id="subscriptionType"
                          name="subscriptionType"
                          value={formik.values.subscriptionType}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="mt-1 p-2 w-full border rounded-md"
                        >
                          <option value="">Loại Tài Khoản</option>
                          <option value="free">Free</option>
                          <option value="fee">Fee</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="role"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Role
                        </label>
                        <select
                          id="role"
                          name="role"
                          value={formik.values.role}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="mt-1 p-2 w-full border rounded-md"
                        >
                          <option value="">Loại Tài Khoản</option>
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-6 justify-end">
                      <div onClick={() => setIsOpen(false)}>
                        <button
                          type="button"
                          className="w-full py-3 px-6 bg-red-500 text-white rounded-md hover:bg-red-600 font-semibold"
                        >
                          Cancel
                        </button>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-semibold"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Modal>
            ) : (
              <></>
            )}
          </tbody>
        </table>
        {/* <Paginate
  data={data}
  itemsPerPage={5}
  onPageChange={handlePageChange}
/> */}
      </div>
    </div>
  );
}

export default User;
