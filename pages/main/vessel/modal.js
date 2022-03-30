import { Spinner } from "react-bootstrap";
import React, { useState } from "react";
import styles from "../../../styles/addVessel.module.css";
import { Formik } from "formik";

export default function Index() {
  const errorMessage = "Please enter";

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          country: "",
          imonumber: "",
          email: "",
          contactnumber: "",
          grt: null,
          isActive: true,
        }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = `${errorMessage} Vessel Name`;
          }  if (!values.country) {
            errors.country = `${errorMessage} country Name`;
          }  if (!values.imonumber) {
            errors.imonumber = `${errorMessage} IMO Number`;
          }  if (!values.contactnumber) {
            errors.contactnumber = `${errorMessage} Contact Number`;
          }  if (!values.grt || grt == null) {
            errors.grt = `${errorMessage} GRT`;
          }  if (!values.email) {
            errors.email = `${errorMessage} Email`;
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
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
            className="d-grid gap-4 col-5 mx-auto mt-5"
            onSubmit={handleSubmit}
          >
            <h3 className={`${styles.text}`}>Add Vessel</h3>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Vessel name (i.e TERAX-19003)"
              className={`${styles.addVesselInput}`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <div className="error">
              {errors.name && touched.name && errors.name}
            </div>
            <input
              id="country"
              name="country"
              type="text"
              placeholder="Country"
              className={`${styles.addVesselInput}`}
             
            />
            <input
              id="imonumber"
              name="imonumber"
              type="text"
              placeholder="IMO number (i.e 9000323321)"
              className={`${styles.addVesselInput}`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.imonumber}
            />
            <div className="error">
              {errors.imonumber && touched.imonumber && errors.imonumber}
            </div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className={`${styles.addVesselInput}`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <div className="error">
              {errors.email && touched.email && errors.email}
            </div>
            <input
              id="contactnumber"
              name="contactnumber"
              type="text"
              placeholder="Contact number"
              className={`${styles.addVesselInput}`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.contactnumber}
            />
            <div className="error">
              {errors.contactnumber &&
                touched.contactnumber &&
                errors.contactnumber}
            </div>
            <input
              id="GRT"
              name="GRT"
              type="text||number"
              placeholder="GRT range (i.e 0493kfz-fe0dol)"
              className={`${styles.addVesselInput}`}
           
           
            />
            <button
              type="submit"
              className={`btn btn-success form-control ${styles.button}`}
            >
              SUBMIT {<Spinner variant="dark" animation="border" />}
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}
