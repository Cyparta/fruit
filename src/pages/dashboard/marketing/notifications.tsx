import React, { useEffect, useState } from "react";
import Seo from "@/components/common/seo";

import Search from "@/components/common/Search";
import { useRouter } from "next/router";
import ButtonPrint from "@/components/common/ButtonPrint";

import Select from "@/components/common/Select";

import { productsNav } from "@/data/products";
import Inputdata from "@/components/common/Inputdata";

import { Crumbs } from "@/data/crumbs";
import { useDispatch, useSelector } from "react-redux";
import { breadcrumdsname, mainnav } from "@/features/marketing/marketingSlice";
import Table from "@/components/common/Table";
import { notificationAnalysics, notificationdata } from "@/data/marketing";
import Breadcrumb from "@/components/common/Breadcrumb";
// import Breadcrumbs from "@/components/marketing/Breadcrumb ";

const data: Crumbs[] = [
  { title: "marketing", to: "", active: false },
  { title: "Notifications", to: "marketing/notifications", active: true },
];
const Notifications = () => {
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
  let {
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    gotopage,
    pageOptions,
  } = useSelector((state: any) => state.table);
  return (
    <div>
      <div className="m-4">
        <Seo pageTitle="profileuser" />
        <Breadcrumb data={dataurl} mainnav="Marketing" maintwo="" />
        {width < 995 ? <Search width="w-100" /> : <Search width="w-40" />}

        {/* box  */}
        <div
          style={{
            background: "rgba(248, 249, 250, 1)",
            padding: "24px",
            borderRadius: "10px",
          }}
        >
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6">
              <Inputdata
                name=""
                desc="Please Enter Category number"
                title="notice time"
                bgColor="transparent"
                border="1px solid rgba(230, 237, 255, 1)"
              />
              <Inputdata
                name=""
                desc="Please Enter Category number"
                title="notice time"
                bgColor="transparent"
                border="1px solid rgba(230, 237, 255, 1)"
              />
              <Inputdata
                name=""
                desc="Please Enter Category number"
                title="notice time"
                bgColor="transparent"
                border="1px solid rgba(230, 237, 255, 1)"
              />
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6">
              <p style={{ fontSize: "16px", fontWeight: "500" }}>
                Offer notice
              </p>
              <textarea
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "1px solid rgba(230, 237, 255, 1)",
                  height: "80%",
                  padding: "10px",
                }}
              >
                Notification content
              </textarea>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center my-4">
          <ButtonPrint data="send" />
        </div>

        {/* table */}
        <div className="stylerow row">
          <Table
            data={notificationdata}
            columsresult={notificationAnalysics}
            selectvalue="time"
          />
        </div>
        <div className="spancolor p-2 d-flex">
          <div>
            Showing {notificationdata.length} of {notificationdata.length}{" "}
            Results
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

        {/* print */}
        <ButtonPrint data="print" />
      </div>
    </div>
  );
};

export default Notifications;
