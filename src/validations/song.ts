import * as Yup from "yup";

const createSong = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  image: Yup.string().required("Image is Required"),
  audio: Yup.string().required("Audio is Required"),
  artistId: Yup.string()
    .required("You must select an Artist")
    .notOneOf([""], "You must select an option"),
  genreId: Yup.string()
    .required("You must select an Genre")
    .notOneOf([""], "You must select an option"),
  lyrics: Yup.string().required("Lyrics is Required"),
});

export const songValidate = {
  createSong,
};
