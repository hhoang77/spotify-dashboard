import { useDispatch, useSelector } from "react-redux";
import { getAllArtistAction } from "../store/actions/artistActions";
import { RootState, AppDispatch } from "../store/reducers/index";
import { useEffect } from "react";
import { MdOutlineModeEditOutline, MdDeleteForever } from "react-icons/md";

interface dataArtist {
  _id: string;
  name: string;
  avarta: string;
  gender: string;
  bio: string;
}

function Artist() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllArtistAction());
  }, [dispatch]);
  const { data } = useSelector((state: RootState) => state.artist);

  return (
    <div className="w-full h-full">
      <div className="flex justify-between m-4">
        <div className=" text-2xl font-medium">Artist</div>
        <div className=" text-2xl font-medium">
          <a
            href="/dashboard/artist/add-new"
            className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded "
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
                Tên Ca Sĩ
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Hình Ảnh
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Giới Tính
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Thông Tin
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item: dataArtist, index: number) => (
                <tr key={index} className="bg-white border-b  ">
                  <td className="px-4 py-4 text-center">{item.name}</td>
                  <td className="px-4 py-4 w-[200px]">
                    <img
                      className="w-[200px] h-[200px] object-cover mx-auto"
                      src={item.avarta}
                      alt={item._id}
                    />
                  </td>
                  <td className="px-4 py-4 text-center">{item.gender}</td>
                  <td className="px-4 py-4 text-center">{item.bio}</td>

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

export default Artist;
