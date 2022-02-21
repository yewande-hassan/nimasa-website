import React from 'react';
import styles from '../../../styles/vesselDetails.module.css';
import { BaseLayout } from '../../../component/common/ui';
import { Details } from '../../../component/common/ui/common/Details';
import { details } from '../../../public/data/details';
import { transaction } from '../../../public/data/transaction';
import { Transaction } from '../../../component/common/ui/common/Transaction';


export default function VesselDetails() {
  return (
    <>
   
     <div className={`d-flex flex-row justify-content-between mt-3 py-3 ${styles.wrapp}`}>
        <h3 className={`start-5 mx-3 ${styles.header}`}>Vessel Information</h3>   
      </div >
          <main className='row container-fluid'>
              <section className={`col-5 ${styles.section1}`}>
                  <div className={`d-flex flex-row mt-2 justify-content-between ${styles.contain}`}>
                      <div >
                          <h6 className={`${styles.h6}`}>Details</h6>
                          <p className={`${styles.paragraph}`}>13 July, 2021 18:38pm</p>
                      </div>
                      <div>
                      <button type="button" className={`${styles.btn}`}>Pending</button>
                      </div>
                  </div>
              
                       {details.map((rows, index) => (
          <Details
            key={index}
            column={rows.column}
           
          />
      ))}
                  
              </section>
              <section className={`col-7 `}>
              <div>
              <h6 className={` my-2 ${styles.h6}`}>Transaction</h6>
        <div className={`d-flex justify-content-between py-2 ${styles.head} ${styles.transac} ${styles.row}`}>
        <h6>Transaction ID</h6>
        <h6>Category</h6>
        <h6>Total Amount</h6>
        <h6>Location</h6>
        <h6>Approved By </h6>
        <h6>Date</h6>
        </div>
      
        {transaction.map((rows, index) => (
          <Transaction
            key={index}
            column={rows.column}
           
          />
      ))}
  
        </div>
              </section>
          </main>
    </>
  )
}
VesselDetails.Layout = BaseLayout;