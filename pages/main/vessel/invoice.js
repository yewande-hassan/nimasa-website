import React from 'react';
import { BaseLayout } from '../../../component/common/ui';
import Select from '../../../component/common/ui/common/Select'
import styles from '../../../styles/Invoice.module.css';

export default function invoice() {
 
    return (
        <>
            <div className={`d-flex flex-row justify-content-between mt-3 py-3 ${styles.wrapp}`}>
                <h3 className={`start-5 mx-3 ${styles.header}`}>Create Vessel</h3>
            </div>
            <form className='row g-3 justify-content-between p-2 m-1'>
                <div className={`col-md-4 ${styles.selects}`} >
                    <label>Category of vessel</label>
                    <Select/>
                </div>
                <div className={`col-md-4 ${styles.selects}`}>
                    <label>GRT</label>
                    <Select />
                </div>
                <div className={`col-md-4 ${styles.selects}`}>
                    <label>Load Port</label>
                    <Select />
                </div>
                <div className={`col-md-4 ${styles.selects}`}>
                    <label>Discharge Port</label>
                    <Select />
                </div>
            </form>
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
invoice.Layout = BaseLayout;