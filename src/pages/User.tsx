import { MdOutlineModeEditOutline, MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserActions } from "../store/actions/authActions";
import { RootState, AppDispatch } from "../store/reducers/index";
import { useEffect } from "react";
import AvartaDeafaute from "../assets/default-avatar-profile.webp";

interface userState {
  _id: string;
  email: string;
  image: string;
  username: string;
  phone: string;
  favoriteSong: [
    {
      _id: string;
      name: string;
      image: string;
    }
  ];
  favoriteArtist: [
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

  useEffect(() => {
    dispatch(getAllUserActions());
  }, [dispatch]);

  const { user, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  return (
    <div className="w-full h-full">
      <div className=" text-2xl font-medium">Movie</div>
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
              <th scope="col" className="px-4 py-3 text-center">
                LikeSongs
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                LikeGenre
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
                  <td className="px-4 py-4 text-center">
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
                  </td>
                  <td className="px-4 py-4 flex gap-1 my-20 mx-auto justify-center">
                    <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:opacity-60 cursor-pointer">
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
