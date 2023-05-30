import ColumnFilter from "@/components/common/ColumFilter";

export const paymentAnalysics = [
  {
    Header: "No",
    accessor: "no",
    disableFilter: true,
  },
  {
    Header: "User Name",
    accessor: "user_name",
    filtercolumn: true,
    // Filter: ColumnFilter,
  },
  {
    Header: "Description",
    accessor: "description",
    // filtercolumn: true,

    // Filter:ColumnFilter
  },
  {
    Header: "Status",
    accessor: "status",
    // filtercolumn: true,
    Filter: ColumnFilter,
  },

  {
    Header: "Action",
    accessor: "action",
    // filtercolumn: true,
  },
];
export let paymentdata = [
  {
    no: 1,
    user_name: "reem",
    status: "Delivered",
    description: "wish good luck",
  },
  {
    no: 2,
    user_name: "reem",
    status: "Delivered",
    description: "wish good luck",
  },

  {
    no: 3,
    user_name: "reem",
    status: "Delivered",
    description: "wish good luck",
  },
];
