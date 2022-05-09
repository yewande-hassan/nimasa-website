
import { BaseLayout } from '../../../component/common/ui';
import { vesselService } from '../../../services';
import styles from '../../../styles/Invoice.module.css';
import { Formik } from "formik";
import React, { useEffect,useState } from "react";
export default function Invoice() {
 const [category, setCategory] = useState();
 const [grts, setGrt] = useState();
 const [zone, setZone] = useState();
 const errorMessage = "Please enter correct information on"

 useEffect(()=>{

const promise =[  vesselService.categoryVessel(), vesselService .getAllGRT(), vesselService.loadLocation()]

  Promise.all(promise).then((res)=>{
    console.log(res);
    setCategory(res[0])
    setGrt(res[1]);
    setZone(res[2]);
  }) .catch((err) => {});
    //  vesselService
    //  .categoryVessel()
    //  .then((res) => {
    //     setCategory(res)
    //  })
    //  .catch((err) => {});

    //  vesselService
    //  .getAllGRT()
    //  .then((res) => {
    //    setGrt(res);
    //  })
    //  .catch((err) => {});



    //  vesselService
    //  .loadLocation()
    //  .then((res) => {
    //    setZone(res);
    //  })
    //  .catch((err) => {});
 },[]);



    return (
      <>
        <div className={`d-flex flex-row justify-content-between mt-3 py-3 ${styles.wrapp}`}>
          <h3 className={`start-5 mx-3 ${styles.header}`}>Create New Invoice</h3>
        </div>
        <Formik
          initialValues={{
            category: "",
            grt:"",
            loadport:"",
            dischargeport:"",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.category) {
              errors.name = `${errorMessage} Category of Vessel`;
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
            console.log(Invoice);
          //  categoryVessel(Invoice);
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
          <form className='row g-3 justify-content-between p-2 m-1'   onSubmit={handleSubmit}>
            <div className={`col-md-4 ${styles.selects}`} >
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
                 <option disabled value="">Pick Category</option>
                {category?.map((categorys,i) => (
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
                      <option disabled value="">Pick GRT</option>
                    {grts?.map((option,i) => (
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
                      <option disabled value="">Pick Load port</option>
                    {zone?.map((zones,i) => (
                      <option key={i} value={zones.id}>
                        {zones.location} ( {zones.zoneID['zone']})  
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
                      <option disabled value="">Pick Discharge port</option>
                    {zone?.map((zones,i) => (
                      <option key={i} value={zones.id}>
                         {zones.location} ( {zones.zoneID['zone']})
                      </option>
                    ))}
                  </select>
                  <div className="error">
                    {errors.dischargeport && touched.dischargeport && errors.dischargeport}
                  </div>
            </div>

            <button
                    type="submit"
                    className="btn btn-success form-control"
                  >
                generate price
                  
                  </button>
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