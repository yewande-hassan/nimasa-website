import Link from "next/link";
import styles from "../../../../styles/BaseLayout.module.css";

import { SideNav } from "../common/";

export default function BaseLayout({ children }) {
  return (
    <>
      <div
        className="d-flex flex-row bd-highlight mb-3"
        style={{
          height: "100vh",
        }}
      >
        <div className="">
          {" "}
          <SideNav />
        </div>
        <div className={`flex-grow-1 ${styles.marginLeft}`}> {children}</div>
      </div>
    </>
  );
}
