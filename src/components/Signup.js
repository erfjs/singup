import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";

export const Signup = () => {
  const validate = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Must be 3 characters or more")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
        alert("your form is submitted");
      }}
    >
      <div>
        <h1 className='mt-5 mb-3 font-weight-bold .display-5'>Sign Up</h1>
        <Form>
          <TextField label='First Name' name='firstName' type='text' />
          <TextField label='last Name' name='lastName' type='text' />
          <TextField label='Email' name='email' type='email' />
          <TextField label='password' name='password' type='password' />
          <TextField
            label='Confirm Password'
            name='confirmPassword'
            type='password'
          />
          <button className='btn btn-primary mt-3' type='submit'>
            Register
          </button>
          <button className='btn btn-danger mt-3 mx-3' type='reset'>
            Reset
          </button>
        </Form>
      </div>
    </Formik>
  );
};