import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Header_Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email")
      .required("Email is required"),
    message: Yup.string()
      .max(200, "Message must be at most 200 characters")
      .required("Message is required"),
  });

  const handleSendFeedback = (values: FormValues) => {
    console.log(values);
    toast("Thank you for your feedback!");
  };

  return (
    <div>
      <NavBar />
      <section className="text-gray-600 mb-20 mt-10 body-font relative">
        <div className=" mx-auto flex sm:px-10 lg:px-20 xl:px-32 ">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=17+Duy+Tan,+Cau+Giay,+Ha+Noi&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{
                filter: "contrast(1.2) opacity(0.6)",
                border: "none",
                overflow: "hidden",
              }}
            ></iframe>
            <div className="bg-white absolute flex flex-wrap py-6 m-10 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="capitalize mt-1">17 duy tan, cau giay, ha noi.</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto: Loop@gmail.com"
                  className="text-primary-03 leading-relaxed"
                >
                  Loop@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <a
                  href="tel: 123-456-7890"
                  className="leading-relaxed text-primary-01"
                >
                  123-456-7890
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 sm:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-primary-01 text-xl mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium, ab!
            </p>
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                handleSendFeedback(values);
                resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="relative mb-4">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full bg-white rounded border ${
                        errors.name && touched.name
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  {/* Email field */}
                  <div className="relative mb-4">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full bg-white rounded border ${
                        errors.email && touched.email
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      className={`w-full bg-white rounded border ${
                        errors.message && touched.message
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-primary-01 border-0 py-2 px-6 focus:outline-none hover:bg-opacity-90 rounded text-lg"
                  >
                    Send Feedback
                  </button>
                </Form>
              )}
            </Formik>
            <p className="text-xs text-center text-gray-500 mt-3">
              Thank you for your feedback. Have a nice day!
            </p>
          </div>
        </div>
        <ToastContainer autoClose={1200} />
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
