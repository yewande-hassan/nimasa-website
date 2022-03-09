import React from "react";
import { BaseLayout } from "../../component/common/ui";
import { Analystic } from "../../component/common/ui/common";

export default function Home() {
  return (
    <>
      <div className="container my-5 mx-2">
        <div className="row justify-content-around">
          <Analystic
            title=" Total Number of vessels"
            value={100}
            classes="bg_green"
          />

          <Analystic
            title=" Total Transaction"
            value={500000}
            classes=" bg_blue"
          />
          <Analystic title=" Total Users" value={20} classes=" bg_red" />
        </div>
      </div>
    </>
  );
}

Home.Layout = BaseLayout;
