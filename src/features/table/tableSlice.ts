import { createSlice } from "@reduxjs/toolkit";
interface tableinterface {
  previousPage: () => void;
  nextPage: () => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  gotopage: (page: number) => void;
  pageOptions: any[];
  pageIndex?: number;
}
const initialState: tableinterface = {
  previousPage: () => console.log("previousPage"),
  nextPage: () => console.log("nextPage"),
  canPreviousPage: false,
  canNextPage: false,
  gotopage: (page: number) => console.log("gotopage"),
  pageOptions: [],
  pageIndex: 0,
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addpreviousPage: (state, action) => {
      state.previousPage = action.payload;
    },
    addnextPage: (state, action) => {
      state.nextPage = action.payload;
    },
    updatecanPreviousPage: (state, action) => {
      state.canPreviousPage = action.payload;
    },
    updatecanNextPage: (state, action) => {
      state.canNextPage = action.payload;
    },
    gotopage: (state, action) => {
      state.gotopage = action.payload;
    },
    setpageOptions: (state, action) => {
      state.pageOptions = action.payload;
    },
    upadtepageIndex: (state, action) => {
      state.pageIndex = action.payload;
    },
  },
});

export const {
  addnextPage,
  addpreviousPage,
  updatecanNextPage,
  updatecanPreviousPage,
  gotopage,
  setpageOptions,
  upadtepageIndex,
} = tableSlice.actions;
export default tableSlice.reducer;
