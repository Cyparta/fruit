import React from "react";
// import Table from '../products/Table'
import { productsNav } from "@/data/products";
import Table from "../common/Table";
import { paymentAnalysics, paymentdata } from "@/data/paymethoddata";
import { useSelector } from "react-redux";

const PaymentMethods = () => {
  let {
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    gotopage,
    pageOptions,
  } = useSelector((state: any) => state.table);
  return (
    <>
      <div className="stylerow">
        {/* <Table /> */}
        {/* <Table data={productsNav} /> */}
        <Table
          data={paymentdata}
          columsresult={paymentAnalysics}
          selectvalue="status"
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
          <span
            className="d-flex w-100 justify-content-evenly"
            style={{ cursor: "pointer" }}
          >
            {pageOptions.length > 0
              ? pageOptions.map((ele: number, index: number) => (
                  <div
                    onClick={() => gotopage(ele)}
                    key={index}
                    style={{ cursor: "pointer" }}
                  >
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
    </>
  );
};

export default PaymentMethods;
