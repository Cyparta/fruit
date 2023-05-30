import ButtonPrint from "@/components/common/ButtonPrint";
import Select from "@/components/common/Select";
// import Table from "@/components/products/Table";
import Seo from "@/components/common/seo";
import Search from "@/components/common/Search";
// import Breadcrumbs from "@/components/common/Breadcrumb ";
import { productsNav } from "@/data/products";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Table from "@/components/common/Table";
import { columsProducts } from "@/data/columsProduct";
import Breadcrumb from "@/components/common/Breadcrumb";
import { useSelector } from "react-redux";
// import Breadcrumbs from "@/components/analytics/Breadcrumb ";
// import Breadcrumbs from "@/components/common/BreadCrumb";
// import {Tab as Table} from "@/components/common/Table";
// import { Breadcrumb } from ";

function Index() {
  let router = useRouter();
  // let [maintwo, setmaintwo] = React.useState("All Products");
  let {
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    gotopage,
    pageOptions,
  } = useSelector((state: any) => state.table);
  // console.log(pagetable);
  let url = router.route.slice(10).replace("/products", "");
  let data = "";
  if (!url) {
    data = "";
  } else {
    data = url;
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
  }, [width]);
  return (
    <>
      <Seo pageTitle="Products" />
      <div className={width < 740 ? "m-1" : "m-5"}>
        <Breadcrumb data={data} mainnav="products" maintwo={"All Products"} />
        {width < 995 ? <Search width="w-100" /> : <Search width="w-40" />}

        <div className="stylerow row">
          <div className="col-12 col-md-6 col-lg-6">
            <h3 className="colorblue mb-5">All Products</h3>
          </div>

          {/* <Table data={productsNav} /> */}
          <Table
            columsresult={columsProducts}
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

export default Index;
