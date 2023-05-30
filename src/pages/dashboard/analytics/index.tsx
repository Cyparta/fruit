// import Breadcrumbs from "@/components/analytics/Breadcrumb ";
import Cards from "@/components/analytics/Cards";
import Breadcrumb from "@/components/common/Breadcrumb";
import ButtonPrint from "@/components/common/ButtonPrint";
import Search from "@/components/common/Search";
import Select from "@/components/common/Select";
import Table from "@/components/common/Table";
import Seo from "@/components/common/seo";
import { columsProductsinanalys } from "@/data/columsProduct";
// import Table from "@/components/products/Table";
import { productsNav } from "@/data/products";
import { breadcrumdsname, mainnav } from "@/features/analytics/analyticsSlice";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Index() {
  let router = useRouter();
  let dispatch = useDispatch();
  let [data, setdata] = useState("");

  const [width, setWidth] = useState<number>(1400);
  let {
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    gotopage,
    pageOptions,
  } = useSelector((state: any) => state.table);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    console.log(width);
    let url = router.route.slice(10).replace("/analytics", "");

    if (!url) {
      dispatch(breadcrumdsname("analytics"));
      dispatch(mainnav("analytics"));

      setdata("");
    } else {
      dispatch(breadcrumdsname(url));
      setdata(url);
    }
    // don't forget to remove the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <>
      <Seo pageTitle="analytics" />
      <div className={width < 740 ? "m-1" : "m-5"}>
        {/* <Breadcrumbs data={data} mainnav={"analytics"} /> */}
        <Breadcrumb data={data} mainnav="Analytics" maintwo="Products" />
        {width < 995 ? <Search width="w-100" /> : <Search width="w-40" />}
        {/* <Search width="w-45"/> */}
        <Cards title="orders" />
        <div className="stylerow mt-5 row">
          <div className="col-12 col-md-6 col-lg-6">
            <h3 className="colorblue mb-5">All Products</h3>
          </div>

          <Table
            columsresult={columsProductsinanalys}
            data={productsNav}
            selectvalue="category"
          />
        </div>
        <div className="spancolor p-2 d-flex">
          <div>
            Showing {productsNav.length} of {productsNav.length} Results
          </div>
          <div className="pagination d-flex w-25">
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </button>{" "}
            <span className="d-flex w-100 justify-content-evenly">
              {pageOptions.length > 0
                ? pageOptions.map((ele: number, index: number) => (
                    <div onClick={() => gotopage(ele)} key={index} style={{ cursor: "pointer" }}>
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

export default Index;
