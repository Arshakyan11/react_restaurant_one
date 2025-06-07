import { date, number, object, ref, string } from "yup";

export const contactUsValidation = object({
  name: string()
    .min(2, "Write you real full Name")
    .max(10, "Write less than 10 symbols")
    .required("Pls write your Name"),
  lastname: string()
    .min(3, "Write you real full LastName")
    .max(10, "Write less than  10 symbols")
    .required("Pls write your LastName"),
  email: string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Pls enter valid email")
    .required("Pls write Your Email"),
  subject: string()
    .min(3, "Write  Subject more than 3symbols")
    .max(30, "Write less than  15 symbols")
    .required("Pls write Subject"),
  message: string()
    .min(15, "Write more than 15 symbols")
    .max(1500, "Pls write less than 1000 symbols")
    .required("Pls write your message here"),
});

export const userRegistrationValidation = object({
  userName: string()
    .min(2, "Pls write more than 1 symbols")
    .max(16, "Pls write less than 16 symbols")
    .required("Pls write Name"),
  phoneNum: string()
    .matches(/^\+[0-9]{11}$/, "Pls enter valid phone Number")
    .required("Pls write Your phone Number"),
  email: string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Pls enter valid email")
    .required("Pls write Your Email"),
  password: string()
    .min(6, "Write Minimum 6 symbols")
    .max(16, "Write Maximum 16 symbols")
    .required("Pls write Your password"),
  repeatedpassword: string()
    .oneOf([ref("password")], "The password is not the same")
    .required("Pls repeat your passowrd"),
});

export const userLoginValidation = object({
  email: string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Pls enter valid email")
    .required("Pls write Your Email"),
  password: string()
    .min(6, "Write Minimum 6 symbols")
    .max(16, "Write Maximum 16 symbols")
    .required("Pls Write Your Password"),
});

export const userReservationValidation = object({
  address: string().required("Choose Restaurant Address"),
  date: string().required("Choose Time Arriving"),
  count: number()
    .min(1, "Minimum 1 person")
    .max(24, "Maximum 24 person")
    .typeError("Only numbers are allowed")
    .integer("Must be a whole number")
    .required("Choose how many people would come"),
  tableType: string().required("Choose Table Type"),
});
