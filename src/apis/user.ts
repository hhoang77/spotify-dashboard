import { axiosConfig } from "../axios";

export const getAllUser = async () => {
  return await axiosConfig({
    method: "get",
    url: "/user",
  });
};

export const register = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "user/register",
    data,
  });
};

export const login = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/user/login",
    data,
  });
};

export const deteleUser = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `/user/delete?id=${id}`,
  });
};

export const updateUser = async (id: string, data: any) => {
  console.log(id);
  console.log(data);

  return await axiosConfig({
    method: "put",
    url: `/user/updateByAdmin?id=${id}`,
    data,
  });
};

export const updateRole = async (id: string, role: string) => {
  return await axiosConfig({
    method: "put",
    url: `/user/updateRole?role=${role}`,
  });
};
