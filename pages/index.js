import { Formik } from "formik";
import { Logo } from "../component/common/ui/common";
import styles from "../styles/Signin.module.css";
import Head from "next/head";
import { Spinner, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../Redux/Auth/authaction";

import React, { useEffect } from "react";
export default function Login() {
  const dispatch = useDispatch();

  const { isLoading, isAuth, error } = useSelector((state) => state.auth);

  const login = (value) => {
    dispatch(signIn(value));
  };
  return (
    <>
      <Head>
        <title>Nimasa Website</title>
      </Head>

      <section className="container-fluid">
        <main
          className="row align-items-start"
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <div className="col-lg-6  col-md-12  col-sm-12">
            <Logo height={100} width={100} />
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validate={(values) => {
                const errors = {};

                if (!values.email) {
                  errors.email = "Incorrect Email";
                } 
                 if (!values.password) {
                  errors.password = "Please Input a Password";
                } 
                
                else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email
                  )
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              // eslint-disable-next-line react/jsx-no-duplicate-props
       
              onSubmit={(values) => {
                dispatch(login(values));
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="d-grid gap-4 col-4 mx-auto mt-5"
                >
                  <h3 className={`${styles.h3}`}>Sign In</h3>
                  <p className={`${styles.p}`}>
                    Welcome, kindly login with your credentials to use the app
                  </p>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <div className="error">
                    {errors.email && touched.email && errors.email}
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <div className="error">
                    {errors.password && touched.password && errors.password}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success form-control"
                  >
                    SIGN IN    {isLoading && (
                    <Spinner variant="dark" animation="border" />
                  )}
                  </button>
               
                </form>
              )}
            </Formik>
          </div>
          <div className="col-lg-6 d-none d-sm-none d-md-none d-lg-block ">
            <img src="images/img.png" alt="view-of-nimasa" />
          </div>
        </main>
      </section>
    </>
  );
}
