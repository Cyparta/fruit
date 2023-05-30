import ColumnFilter from "@/components/common/ColumFilter";
import { Column } from "react-table";
import { Product } from "./products";
import GlobalFilter from "@/components/common/GlobalFilter";
// export interface Column{
//   filterValue: any;
//   setFilter: any;
//   preFilteredRows: any;
//   id: any;
// };

export const columsProducts = [
  {
    Header: "NO",
    accessor: "no",
    disableFilter: true,
  },
  {
    Header: "SkU",
    accessor: "sku",
    filtercolumn: true,
  },
  {
    Header: "Category",
    accessor: "category",
    Filter: ColumnFilter,
  },
  {
    Header: "country of origin",
    accessor: "country_of_origin",
    // Filter: ColumnFilter,
  },
  {
    Header: "Product Name",
    accessor: "product_name",
    filtercolumn: true,
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Amount",
    accessor: "amount",
    filtercolumn: true,
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
export const columsProductsinanalys = [
  {
    Header: "NO",
    accessor: "no",
    disableFilter: true,
  },
  {
    Header: "SkU",
    accessor: "sku",
    filtercolumn: true,
  },
  {
    Header: "Category",
    accessor: "category",
    Filter: ColumnFilter,
  },
  {
    Header: "Product Name",
    accessor: "product_name",
    filtercolumn: true,
  },
  {
    Header: "Items sold",
    accessor: "items_sold",
  },
  ,
  {
    Header: "Net sales",
    accessor: "net_sales",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Amount",
    accessor: "amount",
    filtercolumn: true,
  },
];
