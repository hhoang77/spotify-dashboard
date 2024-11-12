import { axiosConfig } from "../axios";

export const getAllArtist = async () => {
  return await axiosConfig({
    method: "get",
    url: "/artist",
  });
};

export const getArtistById = async (id: string) => {
  return await axiosConfig({
    method: "get",
    url: `/artist/getById?id=${id}`,
  });
};

export const createArtist = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/artist/create",
    data,
  });
};

export const updateArtist = async (id: string, data: any) => {
  return await axiosConfig({
    method: "put",
    url: `/artist/update?id=${id}`,
    data,
  });
};

export const deleteArtist = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `/artist/delete?id=${id}`,
  });
};
