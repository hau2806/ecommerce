
import React, { Fragment, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { FormValues } from "../../../public/type";
import { User } from "../../../projectLogin/src/interface/user";
import instance from "../../../projectLogin/src/service";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { FaArrowLeft } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const initialValues: FormValues = {
  username: "",
  password: "",
  email: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required!"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required!"),
  password: Yup.string()
    .required("Password is required!"),
});

const Login: React.FC = () => {
  const navigate = useNavigate();
  const onSubmit = (user: User) => {
    (async () => {
      try {
        const { data } = await instance.post(`/login`, user);
        if (data.user) {
          sessionStorage.setItem("accessToken", data.accessToken);
          sessionStorage.setItem("username", data.user.username);
          toast("Login successfully! Welcome to Loop Store!");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      } catch (error) {
        alert("Please enter correct email, username and password.");
      }
    })();
  };

  return (
    <Fragment>
      <div className="h-screen flex items-center bg-primary-01 bg-gradient-to-r from-[#e2e2e2] to-primary-01">
        <ToastContainer autoClose={1500}/>
        <div className="flex justify-center items-center w-full">
          <div className="flex w-9/12 h-full lg:w-10/12 text-[18px] font-semibold flex-col px-4 gap-2 text-white relative">
            <Link
              className="flex gap-2 items-center hover:text-primary-01 duration-200 hover:scale-110 w-fit absolute -translate-y-[34px]"
              to="/"
            >
              <FaArrowLeft />
              <p>Back to Home</p>
            </Link>

            <div className="rounded-2xl">
              <div className="flex bg-white rounded-3xl shadow-md relative overflow-hidden">
                <img
                  src="https://i.pinimg.com/originals/8e/35/c4/8e35c4d62cd5693527ac3d2e84fb2571.png"
                  alt="login form"
                  className="object-cover w-0 md:w-[40%] lg:block transition-all duration-300"
                />
                <div className="w-full md:w-[60%] px-5 flex items-center transition-all duration-300">
                  <div className="w-full p-4 text-center">
                    <Formik
                      initialValues={initialValues}
                      onSubmit={onSubmit}
                      validationSchema={validationSchema}
                      // validateOnChange={false}
                      // validateOnBlur={false}
                    >
                      <Form className="text-gray-500">
                        <h3 className="mb-3 text-primary-01 font-medium text-xl tracking-wider">
                          Sign into your account
                        </h3>
                        <div className="my-2 flex justify-center">
                          <Link
                            to="/logingg"
                            className="border-[1px] border-secondary-01 rounded-2xl inline-flex justify-center items-center w-8 h-8 lg:w-10 lg:h-10 no-underline text-primary-01 mx-3 transition-all duration-300"
                          >
                            <i className="fa-brands fa-google-plus-g"></i>
                          </Link>
                          <Link
                            to="#"
                            className="border-[1px] border-secondary-01 rounded-2xl inline-flex justify-center items-center w-8 h-8 lg:w-10 lg:h-10 no-underline text-primary-01 mx-3 transition-all duration-300"
                          >
                            <i className="fa-brands fa-facebook-f"></i>
                          </Link>
                          <Link
                            to="#"
                            className="border-[1px] border-secondary-01 rounded-2xl inline-flex justify-center items-center w-8 h-8 lg:w-10 lg:h-10 no-underline text-primary-01 mx-3 transition-all duration-300"
                          >
                            <i className="fa-brands fa-github"></i>
                          </Link>
                          <Link
                            to="#"
                            className="border-[1px] border-secondary-01 rounded-2xl inline-flex justify-center items-center w-8 h-8 lg:w-10 lg:h-10 no-underline text-primary-01 mx-3 transition-all duration-300"
                          >
                            <i className="fa-brands fa-linkedin-in"></i>
                          </Link>
                        </div>
                        <p className="text-sm">or use your email password</p>
                        <div className="my-4 mb-4">
                          <Field
                            type="text"
                            id="username"
                            name="username"
                            className="bg-secondary-03 border-0 py-[10px] px-[15px] outline-none rounded-[12px] w-full focus:outline-primary-01 focus:outline-[3px] transition-all duration-75 focus:bg-white"
                            placeholder="Enter Your Username"
                          />
                          <ErrorMessage name="username" component="div" className="text-red-600 pt-2 text-sm"/>

                        </div>

                        <div className="form-outline mb-4">
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            className="bg-secondary-03 border-none py-[10px] px-[15px] outline-none rounded-[12px] w-full focus:outline-primary-01 focus:outline-[3px] transition-all duration-75 focus:bg-white"
                            placeholder="Enter Your Email"
                          />
                          <ErrorMessage name="email" component="div" className="text-red-600 pt-2 text-sm"/>

                        </div>

                        <div className="form-outline mb-4">
                          <Field
                            type="password"
                            id="password"
                            name="password"
                            className="bg-secondary-03 border-none py-[10px] px-[15px] outline-none rounded-[12px] w-full focus:outline-primary-01 focus:outline-[3px] transition-all duration-75 focus:bg-white"
                            placeholder="Enter Your Password"
                          />
                          <ErrorMessage name="password" component="div" className="text-red-600 pt-2 text-sm"/>

                        </div>

                        <div className="flex justify-center text-white">
                          <button
                            type="submit"
                            className="block bg-primary-01 text-md py-[8px] mt-2 px-16 border-[1px] border-transparent rounded-[10px] font-bold tracking-wider uppercase cursor-pointer opacity-80 hover:opacity-100 transition-all duration-300"
                          >
                            Login
                          </button>
                        </div>

                        <Link
                          className="flex text-sm no-underline text-gray-500 mt-2 transition-all duration-300 w-fit mx-auto"
                          to="#!"
                        >
                          Forgot password?
                        </Link>
                        <div className="mt-3 pb-3">
                          <p>Don't have an account?</p>
                          <Link
                            to="/signup"
                            className="text-primary-01 font-bold transition-all duration-300 text-xl"
                          >
                            Sign Up
                          </Link>
                        </div>
                        <div className="flex gap-5 justify-center ">
                          <Link
                            to="#!"
                            className="text-primary-01 text-sm transition-all duration-300"
                          >
                            Terms of use
                          </Link>
                          <Link
                            to="#!"
                            className="text-primary-01 text-sm transition-all duration-300"
                          >
                            Privacy policy
                          </Link>
                        </div>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
