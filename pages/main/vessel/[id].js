import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {transaction} from '../../../component/common/ui/common/data/transaction'
import styles from '../../../styles/vesselDetails.module.css';
import { BaseLayout } from '../../../component/common/ui';
import useSWR, { mutate } from "swr";
import { Overlay } from "../../../component/common/ui/common";

import { vesselService } from "../../../services";

export default function VesselDetails() {
  const router = useRouter()
  const {id} = router.query

  
 
const getOneVessel = async () => {
  const response = await vesselService.getOneVessel(id)

  return response;
};

const { data, error } = useSWR("oneVessel", getOneVessel);
if (error) return `${error.message}`;
if (!data) return <Overlay />;

  return (
    <>

      <div className={`d-flex flex-row justify-content-between mt-3 py-3 ${styles.wrapp}`}>
        <h3 className={`start-5 mx-3 ${styles.header}`}>Vessel Information</h3>
      </div >
      <main className='row container-fluid'>
        <section className={`col-5 ${styles.section1}`}>
          <div className={`d-flex flex-row mt-2 justify-content-between ${styles.contain}`}>
            <div >
              <h6 className={`${styles.heading}`}>Details</h6>
              <p className={`${styles.paragraph}`}>13 July, 2021 18:38pm</p>
            </div>
            <div>
              <button type="button" className={`${styles.btn}`}>Pending</button>
            </div>
          </div>
          <div className={`d-flex flex-row mt-2 justify-content-between ${styles.contain}`}>
            <div >
              <p className={`${styles.paragraph1}`}>Vessel Name</p>
            </div>
            <div>
            <p className={`${styles.thead}`}>{data?.name}</p>
            </div>
          </div>
          <div className={`d-flex flex-row mt-2 justify-content-between ${styles.contain}`}>
            <div >
              <p className={`${styles.paragraph1}`}>Country</p>
            </div>
            <div>
            <p className={`${styles.thead}`}>{data?.country}</p>
            </div>
          </div>
          <div className={`d-flex flex-row mt-2 justify-content-between ${styles.contain}`}>
            <div >
              <p className={`${styles.paragraph1}`}>IMO Number</p>
            </div>
            <div>
            <p className={`${styles.thead}`}>{data?.imonumber}</p>
            </div>
          </div>
          {/* <div className={`d-flex flex-row mt-2 justify-content-between ${styles.contain}`}>
            <div >
              <p className={`${styles.paragraph1}`}>GRT</p>
            </div>
            <div>
            <p className={`${styles.thead}`}>100</p>
            </div>
          </div> */}
          <div className={`d-flex flex-row mt-2 justify-content-between ${styles.contain}`}>
            <div >
              <p className={styles.paragraph1}>Email</p>
            </div>
            <div>
            <p className={styles.thead}>{data?.email}</p>
            </div>
          </div>
          <div className={`d-flex flex-row mt-2 justify-content-between ${styles.contain}`}>
            <div >
              <p className={`${styles.paragraph1}`}>Contact</p>
            </div>
            <div>
            <p className={`${styles.thead}`}>{data?.contactnumber}</p>
            </div>
          </div>
        </section>
        <section className={`col-7 `}>

          <h6 className={` my-2 ${styles.h6}`}>Transaction</h6>
          <table className={` table table-borderless table-striped`}>
            <thead >
              <tr>
                <th> ID</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Zone</th>
                <th>Approved </th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>

              {transaction.map((rows, index) => {
                            return(
                              <tr key={index} >
                                 <td>{rows["TransactionId"]}</td>
                                 <td>{rows["Category"]}</td>
                                 <td>{rows["TotalAmount"]}</td>
                                 <td>{rows["Location"]}</td>
                                 <td >{rows["ApprovedBy"]}</td>
                                 <td>{rows["Date"]}</td>
 
                               </tr>
                              
               
                             )
                           })}  
            </tbody>
          </table>
        </section>
      </main>
    </>
  )
}
VesselDetails.Layout = BaseLayout;