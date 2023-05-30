// import Breadcrumbs from "@/components/analytics/Breadcrumb ";
import Cards from "@/components/analytics/Cards";
import Breadcrumb from "@/components/common/Breadcrumb";
import ButtonPrint from "@/components/common/ButtonPrint";
import Search from "@/components/common/Search";
import Table from "@/components/common/Table";
// import Table from "@/components/common/Table";
import Seo from "@/components/common/seo";
import { columsAnalysics, revenuedata } from "@/data/columnsAnaly";
import { breadcrumdsname, mainnav } from "@/features/analytics/analyticsSlice";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Revenue() {
  let router = useRouter();
  let dispatch = useDispatch();
  let url = router.route.slice(10).replace("/analytics", "");
  let data = "";
  if (!url) {
    dispatch(breadcrumdsname("analytics"));
    dispatch(mainnav("analytics"));
    data = "";
  } else {
    url = url.replace("/", "");
    dispatch(breadcrumdsname(url));
    data = url;
  }
  let {
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    gotopage,
    pageOptions,
  } = useSelector((state: any) => state.table);
  const [width, setWidth] = useState<number>(1400);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    console.log(width);
    // don't forget to remove the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <>
      <Seo pageTitle="analytics" />
      <div className={width < 740 ? "m-1" : "m-5"}>
        <Breadcrumb data={data} mainnav="Analytics" maintwo="" />
        {/* <Breadcrumbs data={data} mainnav={"analytics"} /> */}
        {width < 995 ? <Search width="w-100" /> : <Search width="w-40" />}
       
        <Cards title="revenue" />
        {/* <Table data={}/> */}
        <div className="stylerow mt-5 row">
          <div className="col-12 col-md-6 col-lg-6">
            <h3 className="colorblue mb-5">revenue</h3>
          </div>
          <Table
            columsresult={columsAnalysics}
            data={revenuedata}
            selectvalue="returns"
          />
        </div>

        <div className="spancolor p-2 d-flex">
          <div>
            Showing {revenuedata.length} of {revenuedata.length} Results
          </div>
          <div className="pagination d-flex w-25">
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </button>{" "}
            <span className="d-flex w-100 justify-content-evenly" style={{ cursor: "pointer" }}>
              {pageOptions.length > 0
                ? pageOptions.map((ele: number, index: number) => (
                    <div onClick={() => gotopage(ele)} key={index}>
                      {ele + 1}
                    </div>
                  ))
                : 1}
            </span>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {">"}
            </button>
          </div>
        </div>
        <ButtonPrint data="Print" />
      </div>
    </>
  );
}

export default Revenue;
