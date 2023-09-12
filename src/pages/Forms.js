import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function Forms() {
  const signupForm = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: ""
    },
    validationSchema: Yup.object({
      full_name: Yup.string().min(2, "Mininum 2 characters").max(15, "Maximum 15 characters").required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string().min(8, "Minimum 8 characters").required("Required!"),
      confirm_password: Yup.string().oneOf([Yup.ref("password")], "Password's not match").required("Required!")
    }),
    onSubmit: (values) => {
      console.log('Form Data', values);
    }
  });

  return (
    <div className="Forms">
      <form className="signup__form mx-auto max-w-2xl py-5" onSubmit={signupForm.handleSubmit}>
        <h2 className="font-bold text-2xl text-center">This is signup form</h2>
        <div className="form__group mb-5">
          <label className="block">Full Name</label>
          <input
            className="block w-full"
            type="text"
            name="full_name"
            value={signupForm.values.full_name}
            onChange={signupForm.handleChange}
          />
          {signupForm.errors.full_name && signupForm.touched.full_name && (
            <p className="text-red-500">{signupForm.errors.full_name}</p>
          )}
        </div>
        <div className="form__group mb-5">
          <label className="block">Email</label>
          <input
            className="block w-full"
            type="email"
            name="email"
            value={signupForm.values.email}
            onChange={signupForm.handleChange}
          />
          {signupForm.errors.email && signupForm.touched.email && (
            <p className="text-red-500">{signupForm.errors.email}</p>
          )}
        </div>
        <div className="form__group mb-5">
          <label className="block">Password</label>
          <input
            className="block w-full"
            type="password"
            name="password"
            value={signupForm.values.password}
            onChange={signupForm.handleChange}
          />
          {signupForm.errors.password && signupForm.touched.password && (
            <p className="text-red-500">{signupForm.errors.password}</p>
          )}
        </div>
        <div className="form__group mb-5">
          <label className="block">Confirm Password</label>
          <input
            className="block w-full"
            type="password"
            name="confirm_password"
            value={signupForm.values.confirm_password}
            onChange={signupForm.handleChange}
          />
          {signupForm.errors.confirm_password &&
            signupForm.touched.confirm_password && (
              <p className="text-red-500">{signupForm.errors.confirm_password}</p>
            )}
        </div>
        <div className="form__group mb-5">
          <button className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
