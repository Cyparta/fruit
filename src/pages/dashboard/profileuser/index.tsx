import ButtonPrint from "@/components/common/ButtonPrint";
import Inputdata from "@/components/common/Inputdata";
import Search from "@/components/common/Search";
import Select from "@/components/common/Select";
import Seo from "@/components/common/seo";

import { productsNav } from "@/data/products";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Crumbs } from "@/data/crumbs";
import Link from "next/link";
import { mainnav } from "@/features/analytics/analyticsSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import Table from "@/components/common/Table";
import { usercolumns, userresult } from "@/data/user";

import Breadcrumb from "@/components/common/Breadcrumb";

// const data: Crumbs[] = [
//   { title: "users", to: "/dashboard/users", active: false },
//   { title: "All Members", to: "/dashboard/users", active: true },
// ];

function Index() {
  let {
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    gotopage,
    pageOptions,
  } = useSelector((state: any) => state.table);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(mainnav("profileuser"));
  }, []);
  let router = useRouter();
  let url = router.route.slice(10).replace("/profileuser", "");
  let data = "";
  if (!url) {
    dispatch(mainnav("profileuser"));

    data = "";
  } else {
    url = url.replace("/", "");
    dispatch(mainnav("profileuser"));
    console.log(url, "url");
    data = url;
  }

  const [width, setWidth] = useState<number>(1400);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    console.log(width);
    console.log(url, "url");
    // don't forget to remove the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <div className="user">
      <Seo pageTitle="profileuser" />
      {/* ------ seatch -------*/}
      <div className={width < 740 ? "m-1" : "m-5"}>
        {/* <Breadcrumbs data={data} mainnav="users" /> */}
        <Breadcrumb data={data} mainnav="profileuser" maintwo="All Members" />
        <div className="d-flex align-items-center justify-content-between;">
          {width < 995 ? <Search width="w-100" /> : <Search width="w-40" />}
        </div>
        <div className="d-flex justify-content-end">
          <Link href={"/dashboard/profileuser/addNewMember"}>
            <span className="iconaddtoads">
              <IoMdAdd />
            </span>
          </Link>
        </div>
        <div className="stylerow row mt-5">
          <div className="col-12 col-md-6 col-lg-6">
            <h3 className="colorblue mb-5">All Members</h3>
          </div>

          <Table
            data={userresult}
            columsresult={usercolumns}
            selectvalue="role"
          />
        </div>
        <div className="spancolor p-2 d-flex">
          <div>
            Showing {productsNav.length} of {productsNav.length} Results
          </div>
          <div className="pagination d-flex ">
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </button>{" "}
            <span
              className="d-flex w-100 justify-content-evenly"
              style={{ cursor: "pointer" }}
            >
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

        <ButtonPrint data="print" />
      </div>
    </div>
  );
}

export default Index;
