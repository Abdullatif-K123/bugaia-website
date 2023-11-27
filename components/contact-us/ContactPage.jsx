import React from "react";
import Image from "next/image";
import classes from "./contact.module.css";
import lineImage from "public/assets/line.svg";
import SocialIcons from "../ui/SocialIcons";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import dots from "/public/assets/dots.svg";
import * as Yup from "yup";
import exit from "/public/assets/exit.svg";
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});
const ContactPage = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div className={classes.contactMain}>
      <div className={classes.container}>
        <div className={classes.socialIcons}>
          <Image src={lineImage} alt="line" className={classes.lineImage} />
          <SocialIcons />
        </div>
        <div className={classes.contactInfo}>
          <div className={classes.sectionOne}>
            <div className={classes.emailInfo}>
              <h2>E-mail</h2>
              <p>bugaia@services.com</p>
            </div>
            <div className={classes.emailInfo}>
              <h2>Phone</h2>
              <p>+20 1286651628</p>
            </div>
          </div>
          <div className={classes.sectionTwo}>
            <h2>Send Us a Message</h2>
            <form onSubmit={formik.handleSubmit} className={classes.formStyle}>
              <div className={classes.singleInput}>
                <label htmlFor="email">Your Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={`${classes.inputStyle} ${
                    formik.touched.email && formik.errors.email
                      ? classes.inputStyleError
                      : null
                  }`}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={classes.error}>{formik.errors.email}</div>
                ) : null}
              </div>
              <div className={classes.singleInput}>
                <label htmlFor="phone">Your Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className={`${classes.inputStyle} ${
                    formik.touched.phone && formik.errors.phone
                      ? classes.inputStyleError
                      : null
                  }`}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className={classes.error}>{formik.errors.phone}</div>
                ) : null}
              </div>

              <div className={classes.singleInput}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className={`${classes.inputStyle} ${
                    formik.touched.message && formik.errors.message
                      ? classes.inputStyleError
                      : null
                  }`}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className={classes.error}>{formik.errors.message}</div>
                ) : null}
              </div>

              <button type="submit" className={classes.btnInfoSubmit}>
                Submit
              </button>
            </form>
          </div>
          <div className={classes.dots}>
            <Image src={dots} alt="dots" />
          </div>
        </div>
        <div
          className={classes.exit}
          onClick={() => {
            router.back();
          }}
        >
          <Image src={exit} alt="exit" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
