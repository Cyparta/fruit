import ButtonPrint from "@/components/common/ButtonPrint";
import Search from "@/components/common/Search";
// import Cards from '@/components/overview/Cards'
import Netsales from "@/components/overview/Netsales";
import Totalsales from "@/components/overview/Totalsales";
import { overviewNumber } from "@/data/overviewnumber";
import CardCharts from "@/components/common/cardCharts";
import React, { useEffect, useState } from "react";
// import Cards from "@/components/analytics/Cards";

import { Crumbs } from "@/data/crumbs";
import Link from "next/link";
import { useDispatch } from "react-redux";
// import { mainnav } from "@/features/analytics/analyticsSlice";
import { IoMdAdd } from "react-icons/io";
import { useRouter } from "next/router";
import { breadcrumdsname, mainnav } from "@/features/marketing/marketingSlice";
import Cards from "@/components/marketing/card";
import Table from "@/components/common/Table";
import { conponsAnalysics, coupondata } from "@/data/marketing";
import { conponsanalytics, conponsresult } from "@/data/marketingcarde";
import Breadcrumbs from "@/components/analytics/Breadcrumb ";
import Breadcrumb from "@/components/common/Breadcrumb";

const data: Crumbs[] = [
  { title: "marketing", to: "marketing", active: false },
  { title: "coupons", to: "marketing/coupons", active: true },
];

const Coupons = () => {
  let dispatch = useDispatch();
  let router = useRouter();
  let url = router.route.slice(10).replace("/marketing", "");
  let dataurl = "";
  if (!url) {
    dispatch(breadcrumdsname("marketing"));
    dispatch(mainnav("marketing"));

    dataurl = "";
  } else {
    url = url.replace("/", "");

    dispatch(breadcrumdsname(url));
    dispatch(mainnav("marketing"));

    dataurl = url;
  }
  const [width, setWidth] = useState<number>(1400);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    console.log(width);
    // don't forget to remove the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="m-4">
      <Breadcrumb data={dataurl} mainnav="Marketing" maintwo="" />
      <div className="d-flex align-items-center justify-content-between;">
        {width < 995 ? <Search width="w-100" /> : <Search width="w-40" />}
        {/* <Search /> */}
      </div>
      <div className="d-flex justify-content-end">
        <Link href="/dashboard/marketing/addNewCoupons">
          <span className="iconaddtoads">
            <IoMdAdd />
          </span>
        </Link>
      </div>
      {/* <CardCharts overviewNumber={overviewNumber}/> */}
      <Cards />
      {/* <Cards overviewNumber={overviewNumber}/> */}
      <div className="stylerow mt-5 row">
        <div className="col-12 col-md-6 col-lg-6"></div>

        <Table
          columsresult={conponsAnalysics}
          data={coupondata}
          selectvalue="coupon_type"
        />
      </div>
      <div className="spancolor p-2">
        Showing {coupondata.length} of {coupondata.length} Results
      </div>
      <ButtonPrint data="Add" />
    </div>
  );
};

export default Coupons;
