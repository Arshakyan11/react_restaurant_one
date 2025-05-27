import { object, string } from "yup";

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
    .max(30, "Write less than  15 symbols").required("Pls write Subject"),
  message: string()
    .min(15, "Write more than 15 symbols")
    .max(1500, "Pls write less than 1000 symbols")
    .required("Pls write your message here"),
});
