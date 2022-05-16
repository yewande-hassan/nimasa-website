import { BaseLayout } from "../../../../component/common/ui";
import { vesselService } from "../../../../services";
import styles from "../../../../styles/Invoice.module.css";
import DatePicker from "react-datepicker";
import Router from "next/router";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { Overlay } from "../../../../component/common/ui/common";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { Spinner, Alert } from "react-bootstrap";
export default function Invoice() {
  const [datee, getDate2] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState();
  const [port, setPort] = useState();
  const [grts, setGrt] = useState();
  const [zone, setZone] = useState();
  const errorMessage = "Please enter correct information on";
  const [price, setPrice] = useState(null);
  const [vessel, getVessel] = useState();
  const [days, getdays] = useState(1);
  const [date, getdate] = useState(new Date());

  const getOneVessel = async () => {
    await vesselService
      .getOneVessel(id)
      .then((res) => {
        getVessel(res);
      })
      .catch((err) => {
        getOneVessel();
      });
  };

  useEffect(() => {
    getDate2(addDaysWRONG(date, days));
  }, [date, days]);

  function addDaysWRONG(date, days) {
    const result = new Date(date);

    result.setDate(result.getDate() + parseInt(!days ? 1 : days));

    return result;
  }

  const getPrice = async (data) => {
    const response = await toast.promise(
      vesselService
        .postQuest("tariff/price", data)
        .then((res) => {
          setLoading(false);
          if (res.data.length != 0) {
            setPrice(res.data[0]);
            setPort({
              loadport: data.loadport,
              dischargeport: data.dischargeport,
            });
          }
        })
        .catch((err) => {
          setLoading(false);
          setPrice(null);
        }),
      {
        pending: "Processing",
        success: "completed 👌",
        error: "Promise rejected 🤯",
      }
    );
  };

  const calculateDate = (e) => {
    getdate(e);
  };
  const getCreateTransaction = async () => {
    setLoading(true);
    const data = {
      grossContact: 0.02 * (price?.Price * days),
      Tariff: parseInt(price?.id),
      VesselID: parseInt(id),
      startDate: date,
      endDate: addDaysWRONG(date, days),
      days: days,
      To: parseInt(port?.dischargeport),
      From: parseInt(port?.loadport),
    };
    vesselService
      .postQuest("transaction", data)
      .then((res) => {
        setLoading(false);
        Router.push("/main/vessel/" + id);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getOneVessel();
    categoryVessel();
    getAllGRT();
    loadLocation();
  }, []);

  const categoryVessel = async () => {
    vesselService
      .categoryVessel()
      .then((res) => {
        setCategory(res);
      })
      .catch((err) => {
        categoryVessel();
      });
  };

  const getAllGRT = async () => {
    vesselService
      .getAllGRT()
      .then((res) => {
        setGrt(res);
      })
      .catch((err) => {
        getAllGRT();
      });
  };

  const loadLocation = async () => {
    vesselService
      .loadLocation()
      .then((res) => {
        setZone(res);
      })
      .catch((err) => {
        loadLocation();
      });
  };

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <div
        className={`d-flex flex-row justify-content-between mt-3 py-3 ${styles.wrapp}`}
      >
        <h3 className={`start-5 mx-3 ${styles.header}`}>Create New Invoice</h3>
      </div>
      <Formik
        initialValues={{
          category: "",
          grt: "",
          loadport: "",
          dischargeport: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.category) {
            errors.category = `${errorMessage} Category of Vessel`;
          }
          if (!values.grt || grt == null) {
            errors.grt = `${errorMessage} GRT`;
          }
          if (!values.loadport) {
            errors.loadport = `${errorMessage} Port`;
          }
          if (!values.dischargeport) {
            errors.dischargeport = `${errorMessage} Port`;
          }
          return errors;
        }}
        onSubmit={(Invoice) => {
          getPrice(Invoice);
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
            className="row g-3 justify-content-between p-2 m-1"
            onSubmit={handleSubmit}
          >
            <div className={`col-md-4 ${styles.selects}`}>
              <label>Category of vessel</label>
              {/* <Select/> */}
              <select
                className="form-control"
                id="category"
                name="category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option disabled value="">
                  Pick Category
                </option>
                {category?.map((categorys, i) => (
                  <option key={i} value={categorys.id}>
                    {categorys.description}
                  </option>
                ))}
              </select>
              <div className="error">
                {errors.category && touched.category && errors.category}
              </div>
            </div>
            <div className={`col-md-4 ${styles.selects}`}>
              <label>GRT</label>
              <select
                className="form-control"
                id="grt"
                name="grt"
                value={values.grt}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option disabled value="">
                  Pick GRT
                </option>
                {grts?.map((option, i) => (
                  <option key={i} value={option.id}>
                    {option.min} - {option.max}
                  </option>
                ))}
              </select>
              <div className="error">
                {errors.grt && touched.grt && errors.grt}
              </div>
            </div>
            <div className={`col-md-4 ${styles.selects}`}>
              <label>Load Port</label>
              <select
                className="form-control"
                id="loadport"
                name="loadport"
                value={values.loadport}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option disabled value="">
                  Pick Load port
                </option>
                {zone?.map((zones, i) => (
                  <option key={i} value={zones.id}>
                    {zones.location} ( {zones.zoneID["zone"]})
                  </option>
                ))}
              </select>
              <div className="error">
                {errors.loadport && touched.loadport && errors.loadport}
              </div>
            </div>
            <div className={`col-md-4 ${styles.selects}`}>
              <label>Discharge Port</label>
              <select
                className="form-control"
                id="dischargeport"
                name="dischargeport"
                value={values.dischargeport}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option disabled value="">
                  Pick Discharge port
                </option>
                {zone?.map((zones, i) => (
                  <option key={i} value={zones.id}>
                    {zones.location} ( {zones.zoneID["zone"]})
                  </option>
                ))}
              </select>
              <div className="error">
                {errors.dischargeport &&
                  touched.dischargeport &&
                  errors.dischargeport}
              </div>
            </div>
            {price != null ? (
              <div></div>
            ) : (
              <button type="submit" className="btn btn-success form-control">
                generate price
              </button>
            )}
          </form>
        )}
      </Formik>
      {price == null ? (
        <div></div>
      ) : (
        <table
          className={`table table-bordered ${styles.border} border-secondary mt-5`}
        >
          <thead className={`${styles.thead}`}>
            <tr className={`${styles.headRow}`}>
              <th>Vessel Name</th>
              <th>Date of Delivery</th>
              <th>Date of ReDelivery</th>
              <th>Daily Rate</th>
              <th>Contract Duration</th>
              <th>Gross Contract</th>
              <th>2% Cabotage</th>
              <th></th>
            </tr>
          </thead>
          <tbody className={`${styles.tbody}`}>
            <tr>
              <td>{vessel?.name}</td>
              {/* <td>Light Rage</td> */}
              <th>
                <DatePicker
                  selected={date}
                  onChange={(e) => {
                    calculateDate(e);
                  }}
                />
              </th>
              <th>
                <DatePicker selected={datee} disabled />
              </th>
              <td>{formatter.format(price?.Price)}</td>
              <td>
                {" "}
                <input
                  type="number"
                  min="1"
                  placeholder={days}
                  onChange={(e) => {
                    getdays(e.target.value);
                    // date.setDate(dates.getDate() + parseInt(e.target.value));
                  }}
                />
              </td>
              <td>{formatter.format(price?.Price * days)}</td>
              <td>{formatter.format(0.02 * (price?.Price * days))}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}

      <div>
        {price == null ? (
          <div></div>
        ) : (
          <button
            disabled={loading ? true : false}
            type="button"
            className={`btn mx-5 px-4 ${styles.successBtn}`}
            onClick={getCreateTransaction}
          >
            {!loading && `Submit`}
            {loading && <Spinner variant="dark" animation="border" />}
          </button>
        )}
      </div>
    </>
  );
}
Invoice.Layout = BaseLayout;
