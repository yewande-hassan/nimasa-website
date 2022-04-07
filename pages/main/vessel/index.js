import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { BaseLayout } from "../../../component/common/ui";
import styles from "../../../styles/vessels.module.css";
import Search from "../../../component/common/ui/common/Search";
import Buttongreen from "../../../component/common/ui/common/Buttongreen";
import Select from "../../../component/common/ui/common/Select";
import { Modal, Button } from "react-bootstrap";
import { Formik } from "formik";
import { Spinner } from "react-bootstrap";
import { userService } from "../../../services";
import Router from "next/router";
import useSWR, { mutate } from "swr";
import {Overlay} from "../../../component/common/ui/common";
export default function Vessel() {
  const [datas, setData] = useState();
  const [country, setCountry] = useState();
  const [grts, setGrt] = useState();

  const [show, setShow] = useState(false);
  const errorMessage = "Please enter";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_COUNTRY}`, {})
      .then((res) => {
        setCountry(res.data.data);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}grt`, {})
      .then((res) => {
        setGrt(res.data);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    userService.getAllVessel().then((x) => {
      setData(x);
    });
  }, []);

  const getAllVessel = async () => {
    const response = await userService.getAllVessel();

    return response;
  };

  const handleRowClick = (id) => {
    Router.push("/main/vessel/" + id);
  };

  const addVessel = (Vessel) => {
    new Promise(async (resolve, reject) => {
      try {
        const requestOption = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...Vessel,
          }),
        };
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}vessel`,
          requestOption
        );
        const fetchResult = await response.json();

        if (response.ok) {
          resolve(fetchResult);
        } else {
          const responseError = {
            type: "Error",
            message: fetchResult.message || "Something went wrong",
            data: fetchResult.data || "",
            code: fetchResult.code || "",
          };
          let error = new Error();
          error = { ...error, ...responseError };
          throw error;
        }
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.Token}`;

        axios.defaults.headers.common["Authorization"] = `Bearer ${data.Token}`;

        const result = {
          vessel: parseJwt(data.Token)["data"],
          token: data.Token,
        };

        axios.defaults.headers.common["Authorization"] = `Bearer ${data.Token}`;
      } catch (error) {
        reject(error.message);
      }
    });
  };

  const { data, error } = useSWR("Vessel", getAllVessel);
  if (error) return `${error.message}`;
  if (!data)
    return (
    <Overlay />
    );
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Vessel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              name: "",
              country: "",
              imonumber: "",
              email: "",
              contactnumber: "",
              grt: "",
              isActive: true,
            }}
            validate={(values) => {
              const errors = {};

              if (!values.name) {
                errors.name = `${errorMessage} Vessel Name`;
              }
              if (!values.country) {
                errors.country = `${errorMessage} country Name`;
              }
              if (!values.imonumber) {
                errors.imonumber = `${errorMessage} IMO Number`;
              }
              if (!values.contactnumber) {
                errors.contactnumber = `${errorMessage} Contact Number`;
              }
              if (!values.grt || grt == null) {
                errors.grt = `${errorMessage} GRT`;
              }
              if (!values.email) {
                errors.email = `${errorMessage} Email`;
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(Vessel) => {
              // console.log(values);
              addVessel(Vessel);
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
              <form className="d-flex flex-column " onSubmit={handleSubmit}>
                <div className="form-group my-1 mb-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Vessel name (i.e TERAX-19003)"
                    className={`form-control`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <div className="error">
                    {errors.name && touched.name && errors.name}
                  </div>
                </div>

                <div className="form-group my-1 mb-2">
                  <select
                    className="form-control"
                    id="country"
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option disabled selected>
                      Select vessel Country
                    </option>
                    {country?.map((option, index) => (
                      <option key={index} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <div className="error">
                    {errors.country && touched.country && errors.country}
                  </div>
                </div>

                <div className="form-group my-1 mb-2">
                  <input
                    id="imonumber"
                    name="imonumber"
                    type="text"
                    placeholder="IMO number (i.e 9000323321)"
                    className={`form-control`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.imonumber}
                  />
                  <div className="error">
                    {errors.imonumber && touched.imonumber && errors.imonumber}
                  </div>
                </div>

                <div className="form-group my-1 mb-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={`form-control`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <div className="error">
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>

                <div className="form-group my-1 mb-2">
                  <input
                    id="contactnumber"
                    name="contactnumber"
                    type="text"
                    placeholder="Contact number"
                    className={`form-control`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contactnumber}
                  />
                  <div className="error">
                    {errors.contactnumber &&
                      touched.contactnumber &&
                      errors.contactnumber}
                  </div>
                </div>
                <div className="form-group my-1 mb-2">
                  <select
                    className="form-control"
                    id="grt"
                    name="grt"
                    value={values.grt}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {grts?.map((option, index) => (
                      <option key={option.id} value={option.id}>
                        {option.min} - {option.max}
                      </option>
                    ))}
                  </select>
                  <div className="error">
                    {errors.grt && touched.grt && errors.grt}
                  </div>
                </div>

                <button
                  type="submit"
                  className={`btn btn-success form-control mt-2 ${styles.button}`}
                >
                  SUBMIT
                  {/* {(
                    <Spinner variant="dark" animation="border" />
                    )} */}
                </button>
              </form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>

      <div
        className={`d-flex flex-row justify-content-between mt-3 py-3 ${styles.header}`}
      >
        <h3 className="start-5 mx-3">Vessel</h3>
        <div>
          <button type="button" className={`btn ${styles.btncolor}`}>
            Export
          </button>
          <Buttongreen click={handleShow} />
        </div>
      </div>
      <Search height={20} width={20} />
      <div
        className={`d-flex flex-row justify-content-between p-2 ${styles.header}`}
      >
        <div className="d-flex flex-row justify-content-between ">
          <p className={`start-5 px-4 ${styles.text}`}>Results per page</p>
          <Select placeholder={10} />
        </div>
        <div className="mx-4">
          <p className={styles.text}>
            Showing <span className={styles.bold}>1-10 </span>of 200 results
          </p>
        </div>
      </div>

      <table className={`table   table-striped `}>
        <thead className={styles.thead}>
          <tr>
            <th>Vessel Name</th>
            <th>Country</th>
            <th>IMO Number</th>
            <th>Email</th>
            {/* <th >GRT</th> */}
            <th>Contact</th>
            <th>Status</th>
            {/* <th >Date</th> */}
          </tr>
        </thead>
        <tbody className={` ${styles.tbody}`}>
          {data?.map((rows, index) => {
            return (
              <tr
                key={index}
                onClick={() => {
                  handleRowClick(rows.id);
                }}
             
              >
                <td>{rows["name"]}</td>
                <td>{rows["country"]}</td>
                <td>{rows["imonumber"]}</td>
                <td>{rows["email"]}</td>
                {/* <td  >{rows["GRT"]}</td> */}
                <td>{rows["contactnumber"]}</td>
                <td>{rows["isActive"]}</td>
                {/* <td >{rows["Date"]}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
Vessel.Layout = BaseLayout;
