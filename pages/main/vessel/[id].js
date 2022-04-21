import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {transaction} from '../../../component/common/ui/common/data/transaction'
import styles from '../../../styles/vesselDetails.module.css';
import { BaseLayout } from '../../../component/common/ui';
import axios from 'axios';
import Link from 'next/link';
import Router from "next/router";



export default function VesselDetails() {
  const router = useRouter()
  const {id} = router.query
  const [identity, setIdentity] = useState();
  
  useEffect(() => {
    axios
    .get(`${process.env.NEXT_PUBLIC_URL}vessel/`+`${id}`,{})
    .then((res) => {
      setIdentity(res.data);
    })
    .catch((err) => {
    
    });
}, []);

const handleRowClick = () => {
  Router.push("/main/vessel/invoice");
};

  return (
    <>

      <div className={`d-flex flex-row justify-content-between mt-3 py-3 ${styles.wrapp}`}>
        <h3 className={`start-5 mx-3 ${styles.header}`}>Vessel Information</h3>
       
        <button  onClick={() => {
                  handleRowClick();
                }} type="button" className={`btn btn-success btn-lg mx-3 ${styles.successBtn}`}>Create Invoice</button>
       
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
            <p className={`${styles.thead}`}>{identity?.name}</p>
            </div>
          </div>
          <div className={`d-flex flex-row mt-2 justify-content-between ${styles.contain}`}>
            <div >
              <p className={`${styles.paragraph1}`}>Country</p>
            </div>
            <div>
            <p className={`${styles.thead}`}>{identity?.country}</p>
            </div>
          </div>
          <div className={`d-flex flex-row mt-2 justify-content-between ${styles.contain}`}>
            <div >
              <p className={`${styles.paragraph1}`}>IMO Number</p>
            </div>
            <div>
            <p className={`${styles.thead}`}>{identity?.imonumber}</p>
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
            <p className={styles.thead}>{identity?.email}</p>
            </div>
          </div>
          <div className={`d-flex flex-row mt-2 justify-content-between ${styles.contain}`}>
            <div >
              <p className={`${styles.paragraph1}`}>Contact</p>
            </div>
            <div>
            <p className={`${styles.thead}`}>{identity?.contactnumber}</p>
            </div>
          </div>
        </section>
        <section className={`col-7 `}>

          <h6 className={` my-2 ${styles.h6}`}>Transaction</h6>
          <table className={` table table-borderless`}>
            <thead className={`${styles.thead}`}>
              <tr className='d-flex justify-content-between'>
                <th scope="col">Transaction ID</th>
                <th scope="col">Category</th>
                <th scope="col">Total Amount</th>
                <th scope="col">Location</th>
                <th scope="col">Approved By </th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>

              {transaction.map((rows, index) => {
                            return(
                              <tr key={index} className={`d-flex justify-content-between ${styles.bodyrows}`}>
                                 <td className={styles.bodycol}>{rows["TransactionId"]}</td>
                                 <td className={styles.bodycol}>{rows["Category"]}</td>
                                 <td className={styles.bodycol}>{rows["TotalAmount"]}</td>
                                 <td className={styles.bodycol}>{rows["Location"]}</td>
                                 <td className={styles.bodycol} >{rows["ApprovedBy"]}</td>
                                 <td className={styles.bodycol}>{rows["Date"]}</td>
 
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