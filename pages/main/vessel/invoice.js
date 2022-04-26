
import { BaseLayout } from '../../../component/common/ui';
import { vesselService } from '../../../services';
import styles from '../../../styles/Invoice.module.css';
import { Formik } from "formik";
import React, { useEffect,useState } from "react";
export default function Invoice() {
 const [category, setCategory] = useState();
 const [grts, setGrt] = useState();
 const [zone,setZone] = useState();
 const errorMessage = "Please enter correct information on"

 useEffect(()=>{
     vesselService
     .categoryVessel()
     .then((res) => {
        setCategory(res.data)
     })
     .catch((err) => {});
 },[]);

 useEffect(() => {
  vesselService
    .getAllGRT()
    .then((res) => {
      setGrt(res);
    })
    .catch((err) => {});
}, []);

useEffect(() => {
  vesselService
    .loadPort()
    .then((res) => {
      setZone(res);
    })
    .catch((err) => {});
}, []);

    return (
      <>
        <div className={`d-flex flex-row justify-content-between mt-3 py-3 ${styles.wrapp}`}>
          <h3 className={`start-5 mx-3 ${styles.header}`}>Create Vessel</h3>
        </div>
        <Formik
          initialValues={{
            category: "",
            grt:"",
            zone:""
          }}
          validate={(values) => {
            const errors = {};

            if (!values.category) {
              errors.name = `${errorMessage} Category of Vessel`;
            }
            if (!values.grt || grt == null) {
              errors.grt = `${errorMessage} GRT`;
            }
            if (!values.zone) {
              errors.zone = `${errorMessage} Port`;
            }
            return errors;
          }}
          onSubmit={(invoice) => {
            console.log(invoice);
            categoryVessel(invoice);
          }}

        > 
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur
        }) => (
          <form className='row g-3 justify-content-between p-2 m-1'>
            <div className={`col-md-4 ${styles.selects}`} >
              <label>Category of vessel</label>
              {/* <Select/> */}
              <select
                className="form-control"
                id="categoryVessel"
                name="categoryVessel"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option disabled selected>
                  Category of vessel
                </option>
                {category?.map((categorys, index) => (
                  <option key={categorys.id} value={categorys.id}>
                    {categorys.name}
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
                    {grts?.map((option) => (
                      <option key={option.id} value={option.id}>
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
                    id="zone"
                    name="zone"
                    value={values.zone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {zone?.map((zones) => (
                      <option key={zones.id} value={zones.id}>
                        {zones.name}
                      </option>
                    ))}
                  </select>
                  <div className="error">
                    {errors.zone && touched.zone && errors.zone}
                  </div>
            </div>
            <div className={`col-md-4 ${styles.selects}`}>
              <label>Discharge Port</label>
              <select
                    className="form-control"
                    id="zone"
                    name="zone"
                    value={values.zone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {zone?.map((zones) => (
                      <option key={zones.id} value={zones.id}>
                        {zones.name}
                      </option>
                    ))}
                  </select>
                  <div className="error">
                    {errors.zone && touched.zone && errors.zone}
                  </div>
            </div>
          </form>
        )}
        </Formik>
        <table className={`table table-bordered ${styles.border} border-secondary mt-5`}>
          <thead className={`${styles.thead}`}>
            <tr className={`${styles.headRow}`}>
              <th>Vessel Name</th>
              <th>Contract Type</th>
              <th>Date of Delivery</th>
              <th>Date of Redelivery</th>
              <th >Daily Rate</th>
              <th>Contract Duration</th>
              <th>Gross Contract</th>
              <th >2% Cabotage</th>
              <th></th>
            </tr>
          </thead>
          <tbody className={`${styles.tbody}`}>

            <tr>
              <td>MT Alexander J</td>
              <td>Light Rage</td>
              <td>15-12-2021</td>
              <td>24-12-2021</td>
              <td>$ 21,525</td>
              <td>10 days</td>
              <td>$ 215,250</td>
              <td >$ 4,305</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="button" className={`btn m-5 px-4 ${styles.btncolor}`}>Add</button>
        </div>
        <div>
          <button type="button" className={`btn mx-5 px-4 ${styles.successBtn}`} >Submit</button>
        </div>
      </>
    )
};
Invoice.Layout = BaseLayout;