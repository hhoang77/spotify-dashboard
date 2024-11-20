import * as Yup from "yup";

const createArtist = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  avarta: Yup.string().required("Avarta is Required"),
  gender: Yup.string().required("Gender is Required"),
  bio: Yup.string().min(6).required("Bio is Required"),
});

export const artistValidate = {
  createArtist,
};
