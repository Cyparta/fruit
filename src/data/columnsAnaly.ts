import ColumnFilter from "@/components/common/ColumFilter";
import { Column } from "react-table";

export const columsAnalysics = [
  {
    Header: "Date",
    accessor: "date",
    Filter: ColumnFilter,
    dispatchFilter: false,
    // disableFilter: true,
  },
  {
    Header: "Orders",
    accessor: "orders",
    // filtercolumn: true,
  },
  {
    Header: "Total sales",
    accessor: "total_sales",
    // Filter:ColumnFilter
  },
  {
    Header: "Coupons",
    accessor: "coupons",
    // Filter: ColumnFilter,
  },
  {
    Header: "Returns",
    accessor: "returns",
    Filter: ColumnFilter,
    // filtercolumn: true,
  },
  {
    Header: "Net sales",
    accessor: "net_sales",
  },
  { Header: "Taxes", accessor: "taxes" },
  {
    Header: "Shipping",
    accessor: "shipping",
    // filtercolumn: true,
  },
  {
    Header: "Total",
    accessor: "total",
  },
];
export interface Revenue {
  date: string;
  orders: string;
  total_sales: number;
  coupons: string;
  returns: string;
  net_sales: string;
  taxes: string;
  shipping: string;
  total: string;
}
export let revenuedata: Revenue[] = [
  {
    date: "1/2",
    orders: "#12594",
    total_sales: 324,
    coupons: "Tomato",
    returns: "Yes",
    net_sales: "6835 SAR",
    taxes: "300",
    shipping: "6835 SAR",
    total: "300 Kilo",
  },
  {
    date: "2/2",
    orders: "#12594",
    total_sales: 324,
    coupons: "Tomato",
    returns: "No",
    net_sales: "6835 SAR",
    taxes: "300",
    shipping: "6835 SAR",
    total: "300 Kilo",
  },
  {
    date: "3/2",
    orders: "#12594",
    total_sales: 524,
    coupons: "Tomato",
    returns: "Yes",
    net_sales: "6835 SAR",
    taxes: "300",
    shipping: "6835 SAR",
    total: "300 Kilo",
  },
  {
    date: "4/2",
    orders: "#12594",
    total_sales: 424,
    coupons: "Tomato",
    returns: "No",
    net_sales: "6835 SAR",
    taxes: "300",
    shipping: "6835 SAR",
    total: "300 Kilo",
  },
];
export const orderAnalysics = [
  {
    Header: "Date",
    accessor: "date",
    // disableFilter: true,
    Filter: ColumnFilter,
  },
  {
    Header: "SkU",
    accessor: "sku",
    filtercolumn: true,
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Coupons",
    accessor: "coupons",
    // Filter: ColumnFilter,
  },
  {
    Header: "client type",
    accessor: "client_type",
    Filter: ColumnFilter,
    // filtercolumn: true,
  },
  {
    Header: "Net sales",
    accessor: "net_sales",
  },
  { Header: "Product", accessor: "product" },
  {
    Header: "Shipping",
    accessor: "shipping",
    // filtercolumn: true,
  },
];
export let ordersdata = [
  {
    date: "1/2",
    sku: "#12594",
    status: "Delivered",
    coupons: "Tomato",
    product: "Yes",
    client_type: "835 SAR",
    taxes: "300",
    shipping: "535 SAR",
    net_sales: "300 Kilo",
  },
  {
    date: "2/2",
    sku: "#12594",
    status: "Delivered",
    coupons: "Tomato",
    product: "Yes",
    client_type: "6835 SAR",
    taxes: "300",
    shipping: "6535 SAR",
    net_sales: "300 Kilo",
  },
  {
    date: "3/2",
    sku: "#12594",
    status: "Canceled",
    coupons: "Tomato",
    product: "Yes",
    client_type: "6835 SAR",
    taxes: "300",
    shipping: "6735 SAR",
    net_sales: "300 Kilo",
  },
  {
    date: "4/2",
    sku: "#12594",
    status: "Pending",
    coupons: "Tomato",
    product: "Yes",
    client_type: "6835 SAR",
    taxes: "300",
    shipping: "6735 SAR",
    net_sales: "300 Kilo",
  },
];
export const taxAnalysics = [
  {
    Header: "Tax ID",
    accessor: "tax_id",
    // disableFilter: true,
    filtercolumn: true,
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Orders",
    accessor: "orders",
    // Filter:ColumnFilter
  },
  {
    Header: "Total Tax",
    accessor: "total_tax",
    // Filter: ColumnFilter,
  },
  {
    Header: "Order Tax",
    accessor: "order_tax",
    // filtercolumn: true,
  },
  {
    Header: "Shipping Tax",
    accessor: "shipping_tax",
  },
];
export let taxdata = [
  {
    tax_id: "#12594",
    price: 2343,
    orders: "tomato",
    total_tax: "6835 SAR",
    order_tax: "30df0",
    shipping_tax: "6835 SAR",
  },
  {
    tax_id: "#12594",
    price: 2343,
    orders: "tomato",
    total_tax: "6835 SAR",
    order_tax: "30df0",
    shipping_tax: "6835 SAR",
  },
  {
    tax_id: "#12594",
    price: 2343,
    orders: "tomato",
    total_tax: "6835 SAR",
    order_tax: "30df0",
    shipping_tax: "6835 SAR",
  },
  {
    tax_id: "#12594",
    price: 2343,
    orders: "tomato",
    total_tax: "6835 SAR",
    order_tax: "30df0",
    shipping_tax: "6835 SAR",
  },
];
export const inventoryAnalysics = [
  {
    Header: "No",
    accessor: "no",
    disableFilter: true,
  },
  {
    Header: "SkU",
    accessor: "sku",
    filtercolumn: true,
  },
  {
    Header: "Product Name",
    accessor: "product_name",
    filtercolumn: true,

    // Filter:ColumnFilter
  },
  {
    Header: "Status",
    accessor: "status",
    Filter: ColumnFilter,
  },
  {
    Header: "Amount",
    accessor: "amount",
    // filtercolumn: true,
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
export let inventrydata = [
  {
    no: 1,
    sku: "#12594",
    product_name: "tomato",
    status: "Limited amount",
    amount: "300 Kilo",
  },
  {
    no: 2,
    sku: "#12594",
    product_name: "tomato",
    status: "Out of stock",
    amount: "300 Kilo",
  },
  {
    no: 3,
    sku: "#12594",
    product_name: "tomato",
    status: "Available",
    amount: "300 Kilo",
  },
  {
    no: 4,
    sku: "#12594",
    product_name: "tomato",
    status: "Limited amount",
    amount: "300 Kilo",
  },
];
