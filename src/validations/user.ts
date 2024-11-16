import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const register = Yup.object().shape({
  name: Yup.string().min(3).required("Name is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().min(6).required("Password is Required"),
  phone: Yup.string()
    .required("Phone number is Required")
    .matches(phoneRegExp, "Phone number is not valid"),
});

const login = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(6, "Password at least 6 character ")
    .required("Password is Required"),
});

export const userValidate = {
  register,
  login,
};
