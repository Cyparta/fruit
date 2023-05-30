import ColumnFilter from "@/components/common/ColumFilter";

export const usercolumns = [
  {
    Header: "No",
    accessor: "no",
    disableFilter: true,
  },
  {
    Header: "Started Date",
    accessor: "started_date",
    filtercolumn: true,
  },
  {
    Header: "User Name",
    accessor: "user_name",
    filtercolumn: true,

    // Filter:ColumnFilter
  },
  {
    Header: "Email Address",
    accessor: "email_address",
    // filtercolumn: true,
    // Filter: ColumnFilter,
  },
  {
    Header: "Mobile Number",
    accessor: "mobile_number",
    // filtercolumn: true,
  },
  {
    Header: "Role",
    accessor: "role",
    filtercolumn: true,
    Filter: ColumnFilter,

  },
  {
    Header: "Action",
    accessor: "action",
  },
];
export let userresult = [
  {
    no: 1,
    started_date: "2/4/2023",
    user_name: "Nada",
    email_address: "Nada@gmail.com",
    mobile_number: "0101456789",
    role: "Manager",
  },
  {
    no: 2,
    started_date: "2/5/2023",
    user_name: "reem",
    email_address: "reem@gmail.com",
    mobile_number: "0101456789",
    role: "store manager",
  },
  {
    no: 3,
    started_date: "2/7/2023",
    user_name: "reem",
    email_address: "reem@gmail.com",
    mobile_number: "0101456789",
    role: "store manager",
  },
  {
    no: 4,
    started_date: "2/8/2023",
    user_name: "reem",
    email_address: "reem@gmail.com",
    mobile_number: "0101456789",
    role: "store manager",
  },
];
