import { axiosConfig } from "../axios";

export const getAllGenre = async () => {
  return await axiosConfig({
    method: "get",
    url: "/genre",
  });
};

export const getGenreById = async (id: string) => {
  return await axiosConfig({
    method: "get",
    url: `/genre/getById?id=${id}`,
  });
};

export const createGenre = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/genre/create",
    data,
  });
};

export const updateGenre = async (id: string, data: any) => {
  return await axiosConfig({
    method: "put",
    url: `/genre/update?id=${id}`,
    data,
  });
};

export const deleteGenre = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `/genre/delete?id=${id}`,
  });
};
