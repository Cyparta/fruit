import React from "react";
// import {useTable} from 'react-table'

import {
  Column,
  useTable,
  useGlobalFilter,
  useSortBy,
  useRowSelect,
  useFilters,
  usePagination,
} from "react-table";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumFilter";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import imageedit from "../../../public/assets/image/Edit2.svg";
import imagetrash from "../../../public/assets/image/Trash2.png";

import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import {
  addnextPage,
  addpreviousPage,
  gotopage,
  setpageOptions,
  upadtepageIndex,
  updatecanNextPage,
} from "@/features/table/tableSlice";
interface tableprops {
  data: any[];
  columsresult: any[];
  selectvalue?: string;
  initialState?: {
    pageIndex: number;
    pageSize: number;
  };
}
function Table({ data, columsresult, selectvalue }: tableprops) {
  // const columsresult = React.useMemo(() => colums, []) as Column<Product>[];
  // const data = React.useMemo(() => productsNav, []) as Product[];
  // const tableinfo = useTable({ columns: columsresult, data: productsNav},useGlobalFilter);
  const tableInstance = useTable(
    {
      columns: columsresult,
      data,
      initialState: { pageIndex: 0, pageSize: 3 },
    } as any,
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  interface TableInstance {
    getTableProps: () => any;
    getTableBodyProps: () => any;
    headerGroups: any[];
    rows: any[];
    prepareRow: (row: any) => void;
    state: any;
    page: any[];
    setGlobalFilter: (filterValue: string | undefined) => void;
    previousPage: () => void;
    nextPage: () => void;
    canPreviousPage: boolean;
    canNextPage: boolean;
    pageOptions: any[];
    pageIndex: number;
    gotoPage: (updater: number) => void;
  }
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    pageOptions,
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = tableInstance as any as TableInstance;
  const { globalFilter, pageIndex, filters }: any = state;
  let dispatch = useDispatch();
  // let { name, mainnav } = useSelector((state: any) => state.analytics);
  // let { previousPage, nextPage, canPreviousPage, canNextPage } = useSelector(
  //   (state: any) => state.table
  // );

  React.useEffect(() => {
    dispatch(addpreviousPage(previousPage));
    dispatch(addnextPage(nextPage));
    dispatch(updatecanNextPage(canNextPage));
    dispatch(updatecanNextPage(canPreviousPage));
    dispatch(gotopage(gotoPage));
    dispatch(setpageOptions(pageOptions));
  }, []);
  return (
    <>
      <div className="col-sm-12 col-md-12 col-lg-6 row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <GlobalFilter
            filter={globalFilter}
            setFilter={setGlobalFilter}
            data={data}
            selectvalue={selectvalue}
          />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          {headerGroups.map(
            (
              headerGroup: {
                getHeaderGroupProps: () => React.JSX.IntrinsicAttributes &
                  React.ClassAttributes<HTMLTableRowElement> &
                  React.HTMLAttributes<HTMLTableRowElement>;
                headers: any[];
              },
              index
            ) => (
              <div
                {...headerGroup.getHeaderGroupProps()}
                key={index}
                className="d-flex flex-wrap"
              >
                {headerGroup.headers.map((column, ind) => {
                  {
                    ("col-sm-12 col-md-12 col-lg-12 col-12 styletocolumncustom mb-3");
                  }
                  return (
                    <>
                      {column.canFilter && column.Filter ? (
                        <div
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          scope="col"
                          className={
                            headerGroup.headers.filter((ele) => ele.Filter)
                              .length > 1
                              ? "col-sm-12 col-md-12 col-lg-6  styletocolumncustom mb-3"
                              : "col-sm-12 col-md-12 col-lg-12  styletocolumncustom mb-3"
                          }
                          key={ind}
                        >
                          {/* {column.canFilter ? (
                        <div>{column.render("Filter")}</div>
                      ) : null} */}
                          {column.render("Filter")}
                          {/* <div>{column.canFilter && column.Filter}</div> */}
                        </div>
                      ) : null}
                    </>
                  );
                })}
              </div>
            )
          )}
        </div>
      </div>
      <div style={{ overflowX: "scroll" }}>
        <table
          {...getTableProps()}
          className="table"
          style={{ tableLayout: "auto" }}
        >
          <thead>
            {headerGroups.map(
              (
                headerGroup: {
                  getHeaderGroupProps: () => React.JSX.IntrinsicAttributes &
                    React.ClassAttributes<HTMLTableRowElement> &
                    React.HTMLAttributes<HTMLTableRowElement>;
                  headers: any[];
                },
                index
              ) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column, ind) => {
                    return (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        scope="col"
                        key={ind}
                      >
                        <div className="" style={{ minWidth: "150px" }}>
                          {column.render("Header")}

                          <span className="m-2">
                            {column.filtercolumn ? (
                              column.isSortedDesc ? (
                                <CgArrowsExchangeAltV />
                              ) : (
                                <CgArrowsExchangeAltV />
                              )
                            ) : (
                              ""
                            )}
                          </span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              )
            )}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={i}>
                  {row.cells.map((cell: any, ind: number) => {
                    return cell.column.Header !== "Action" &&
                      cell.column.Header !== "Status" ? (
                      <td {...cell.getCellProps()} key={ind}>
                        {cell.render("Cell")}
                      </td>
                    ) : cell.column.Header === "Action" ? (
                      <td key={ind}>
                        <button className="btn  ml-3" id="bar">
                          <Image
                            src={imageedit}
                            alt=""
                            className="bluebuttom"
                          />
                        </button>
                        <button className=" btn  ml-3 " id="bar">
                          <Image
                            src={imagetrash}
                            alt=""
                            className="bluebuttom"
                          />
                        </button>
                      </td>
                    ) : cell.column.Header === "Status" ? (
                      <td key={ind} className="">
                        <span className="styleborder">
                          {cell.render("Cell").props.value === "Delivered" ||
                          cell.render("Cell").props.value === "Available" ||
                          cell.render("Cell").props.value === "Active" ? (
                            <span className="circuit green"></span>
                          ) : cell.render("Cell").props.value === "Canceled" ||
                            cell.render("Cell").props.value ===
                              "Out of stock" ||
                            cell.render("Cell").props.value === "blocked" ? (
                            <span className="circuit red"></span>
                          ) : cell.render("Cell").props.value === "Pending" ||
                            cell.render("Cell").props.value ===
                              "Limited amount" ||
                            cell.render("Cell").props.value === "Paused" ? (
                            <span className="circuit yellow"></span>
                          ) : (
                            ""
                          )}
                          <span>{cell.render("Cell")}</span>
                        </span>
                      </td>
                    ) : (
                      ""
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
function useEffect(arg0: () => void) {
  throw new Error("Function not implemented.");
}
