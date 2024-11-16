import { axiosConfig } from "../axios";

export const getAllSong = async () => {
  return await axiosConfig({
    method: "get",
    url: "/song/",
  });
};

export const getSongById = async (id: string) => {
  return await axiosConfig({
    method: "get",
    url: `/song/getById?id=${id}`,
  });
};

export const getSongByGenre = async (slug: string) => {
  return await axiosConfig({
    method: "get",
    url: `/song/getByGenre/${slug}`,
  });
};

export const getSongByArtist = async (id: string) => {
  return await axiosConfig({
    method: "get",
    url: `song/getByArtist?id=${id}`,
  });
};

export const searchItem = async (q: string) => {
  return await axiosConfig({
    method: "get",
    url: `song/searchItem?q=${q}`,
  });
};

export const createSong = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/song/create",
    data,
  });
};

export const updateSong = async (id: string, data: any) => {
  return await axiosConfig({
    method: "put",
    url: `/song/update?id=${id}`,
    data,
  });
};

export const deleteSong = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `song/delete?id=${id}`,
  });
};
