import React from "react";
import { BaseLayout } from "../../../component/common/ui";
import styles from "../../../styles/vessels.module.css";
import { row } from "../../../public/data/row";
import Search from "../../../component/common/ui/common/Search";
import Buttongreen from "../../../component/common/ui/common/buttongreen";
import { Row } from "../../../component/common/ui/common/Row";

export default function Vessel() {
  return (
    <>
      <div
        className={`d-flex flex-row justify-content-between mt-3 py-3 ${styles.header}`}
      >
        <h3 className="start-5 mx-3">Vessel</h3>
        <div>
          <button type="button" className={`btn ${styles.btncolor}`}>
            Export
          </button>
          <Buttongreen />
        </div>
      </div>
      <Search height={20} width={20} />
      <div
        className={`d-flex flex-row justify-content-between p-2 ${styles.header}`}
      >
        <div className="d-flex flex-row justify-content-between ">
          <p className="start-5 px-4">Results per page</p>
          <select name="number" id="number" className="p-2">
            <option value="10"> 10</option>
            <option value="20"> 20</option>
            <option value="50"> 50</option>
          </select>
        </div>
        <div className="mx-4">
          <p>
            Showing <span className={styles.bold}>1-10 </span>of 200 results
          </p>
        </div>
      </div>
      <div>
        <div className={`d-flex justify-content-between p-3 ${styles.head}`}>
          <h6>Vessel Name</h6>
          <h6>Country</h6>
          <h6>IMO Number</h6>
          <h6>Email</h6>
          <h6>GRT</h6>
          <h6>Contact</h6>
          <h6>Status</h6>
          <h6>Date</h6>
        </div>

        {row.map((rows, index) => (
          <Row key={index} column={rows.column} />
        ))}
      </div>
    </>
  );
}
Vessel.Layout = BaseLayout;
