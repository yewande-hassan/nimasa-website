import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link'
import { BaseLayout } from '../../../component/common/ui';
import styles from '../../../styles/vessels.module.css';
import {row} from '../../../component/common/ui/common/data/row';
import Search from '../../../component/common/ui/common/Search';
import Buttongreen from '../../../component/common/ui/common/Buttongreen';
import Select from '../../../component/common/ui/common/Select';



export default function Vessel({transaction}) {
  const[data,setData]=useState()

  useEffect(()=>{
    axios
    .get(`${process.env.NEXT_PUBLIC_GET_VESSEL_HISTORY}`,{})
    .then((res)=> {
     setData(res.data)
    })
    .catch((err)=>{
   console.log(err)
    })
  },[]);
  
    return (
    <>

      <div className={`d-flex flex-row justify-content-between mt-3 py-3 ${styles.header}`}>
        <h3 className='start-5 mx-3'>Vessel</h3>
        <div>
          <button type="button" className={`btn ${styles.btncolor}`}>Export</button>
          <Buttongreen />
        </div>
      </div >
      <Search height={20} width={20} />
      <div className={`d-flex flex-row justify-content-between p-2 ${styles.header}`}>
        <div className='d-flex flex-row justify-content-between '>
          <p className={`start-5 px-4 ${styles.text}`}>Results per page</p>
          <Select placeholder={10}/>
        </div>
        <div className='mx-4'>
          <p className={styles.text}>Showing <span className={styles.bold}>1-10 </span>of 200 results</p>
        </div>

      </div >

      <table className={`table table-borderless ${styles.head}`}>
        <thead className={styles.thead}>
          <tr className='p-3 d-flex justify-content-between'>
            <th scope="col">Vessel Name</th>
            <th scope="col">Country</th>
            <th scope="col">IMO Number</th>
            <th scope="col">Email</th>
            {/* <th scope="col">GRT</th> */}
            <th scope="col">Contact</th>
            <th scope="col">Status</th>
            {/* <th scope="col">Date</th> */}
          </tr>
        </thead>
        <tbody className={` ${styles.tbody}`}>
          {data?.map((rows, index) => {
                       return(
                        <Link key={index} href="/main/vessel/[id]" as={`/main/vessel/${rows.id}`}><a className={styles.link}>
                        <tr key={rows.index}className={`d-flex justify-content-between ${styles.bodyrows}`}>
                           <td className={styles.bodycol}>{rows["name"]}</td>
                           <td className={styles.bodycol}>{rows["country"]}</td>
                           <td className={styles.bodycol}>{rows["imonumber"]}</td>
                           <td className={styles.bodycol}>{rows["email"]}</td>
                           {/* <td className={styles.bodycol} >{rows["GRT"]}</td> */}
                           <td className={styles.bodycol}>{rows["contactnumber"]}</td>
                           <td className={styles.bodycol}>{rows["isActive"]}</td>
                           {/* <td className={styles.bodycol}>{rows["Date"]}</td> */}
                         </tr>
                      
                      </a>
                      </Link>
                       )
                     })}  
        
        </tbody>
      </table>
    </>
  )

}
Vessel.Layout = BaseLayout;
