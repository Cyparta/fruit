import ColumnFilter from "@/components/common/ColumFilter";

export const marketingAnalysics = [
  {
    Header: "No",
    accessor: "no",
    disableFilter: true,
  },
  {
    Header: "Date",
    accessor: "date",
    filtercolumn: true,
    Filter: ColumnFilter,
  },
  {
    Header: "Abs Name",
    accessor: "abs_name",
    filtercolumn: true,

    // Filter:ColumnFilter
  },
  {
    Header: "Ad Category",
    accessor: "ad_category",
    filtercolumn: true,
  },
  {
    Header: "Status",
    accessor: "status",
    Filter: ColumnFilter,

    // filtercolumn: true,
  },
  {
    Header: "Views",
    accessor: "views",
    filtercolumn: true,
  },
  {
    Header: "Action",
    accessor: "action",
    // filtercolumn: true,
  },
];
export let marketingdata = [
  {
    no: 2,
    date: "2/4/2023",
    abs_name: "Supermarket..",
    ad_category: "Vegetables",
    status: "Paused",
    views: 300,
  },
  {
    no: 3,
    date: "2/5/2023",
    abs_name: "Supermarket..",
    ad_category: "Vegetables",
    status: "Paused",
    views: 300,
  },
  {
    no: 4,
    date: "2/6/2023",
    abs_name: "Supermarket..",
    ad_category: "Vegetables",
    status: "Paused",
    views: 300,
  },
  {
    no: 5,
    date: "2/7/2023",
    abs_name: "Supermarket..",
    ad_category: "Vegetables",
    status: "Paused",
    views: 300,
  },
];
export const conponsAnalysics = [
  {
    Header: "No",
    accessor: "no",
    disableFilter: true,
  },
  {
    Header: "Expiry date",
    accessor: "expiry_date",
    filtercolumn: true,
  },
  {
    Header: "coupon code",
    accessor: "coupon_code",
    filtercolumn: true,
  },
  {
    Header: "Coupon type",
    accessor: "coupon_type",
    Filter: ColumnFilter,
  },
  {
    Header: "times of use",
    accessor: "times_of_use",
  },
  {
    Header: "Coupon value",
    accessor: "coupon_value",
    filtercolumn: true,
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
export let coupondata = [
  {
    no: 2,
    expiry_date: "2/4/2023",
    coupon_code: "Super3",
    coupon_type: "Fixed cart discount",
    times_of_use: 344,
    coupon_value: "20%",
  },
  {
    no: 3,
    expiry_date: "2/5/2023",
    coupon_code: "Super3",
    coupon_type: "Fixed cart discount",
    times_of_use: 344,
    coupon_value: "20%",
  },
  {
    no: 4,
    expiry_date: "2/6/2023",
    coupon_code: "Super3",
    coupon_type: "Fixed cart discount",
    times_of_use: 344,
    coupon_value: "20%",
  },
  {
    no: 5,
    expiry_date: "2/7/2023",
    coupon_code: "Super3",
    coupon_type: "Fixed cart discount",
    times_of_use: 344,
    coupon_value: "20%",
  },
];
export const notificationAnalysics = [
  {
    Header: "No",
    accessor: "no",
    disableFilter: true,
  },
  {
    Header: "Expiry date",
    accessor: "expiry_date",
    filtercolumn: true,
  },
  {
    Header: "Notification Content",
    accessor: "notification_content",
    filtercolumn: true,
  },
  {
    Header: "Days",
    accessor: "days",
  },
  {
    Header: "time",
    accessor: "time",
    Filter: ColumnFilter,
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
export let notificationdata = [
  {
    no: 1,
    expiry_date: "2/4/2023",
    notification_content: "Super3",
    days: "Fixed cart discount",
    time: 344,
  },
  {
    no: 2,
    expiry_date: "2/4/2023",
    notification_content: "Super3",
    days: "Fixed cart discount",
    time: 344,
  },
  {
    no: 3,
    expiry_date: "2/4/2023",
    notification_content: "Super3",
    days: "Fixed cart discount",
    time: 344,
  },
  {
    no: 4,
    expiry_date: "2/4/2023",
    notification_content: "Super3",
    days: "Fixed cart discount",
    time: 344,
  },
];
