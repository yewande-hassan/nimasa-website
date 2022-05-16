import React from 'react'
import {transaction} from '../../component/common/ui/common/data/transaction'
import { Overlay } from "../../component/common/ui/common";
import styles from '../../styles/vesselDetails.module.css';
import useSWR, { mutate } from "swr";

import { vesselService } from "../../services";
export default function Transaction({id}) {
    console.log(id)
    const getOneVesselTransaction = async () => {
        console.log('res')
        const response = await vesselService.getOneVesselTransaction(id)
      
        return response;
      };

      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

    const { data, error } = useSWR("trnascationVessel", getOneVesselTransaction);
if (error) return `${error.message}`;
if (!data) return <Overlay />;
  return (
    <table className={` table table-borderless table-striped`}>
            <thead >
              <tr>
                <th>Load Port</th>
                <th>Discharge Port</th>
                <th>2% Cabotage </th>
                <th>Days</th>
                <th>Start Date </th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>

              {data.map((rows, index) => {
                            return(
                              <tr key={index} >
                                 <td>{rows["From"]['location']}</td>
                                 <td>{rows["To"]['location']}</td>
                                 <td>{formatter.format(rows["grossContact"])}</td>
                                 <td>{rows["days"]}</td>
                                 <td >{new Date(rows["startDate"]).toLocaleDateString("en-US")}</td>
                                 <td >{new Date(rows["endDate"]).toLocaleDateString("en-US")}</td>
 
                               </tr>
                              
               
                             )
                           })}  
            </tbody>
          </table>
  )
}
