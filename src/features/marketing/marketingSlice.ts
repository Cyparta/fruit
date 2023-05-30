import { inputValue } from "@/components/common/Inputdata";
import { createSlice } from "@reduxjs/toolkit";
interface analyticsinterface {
  id: number;
  name: string;
  mainnav?: string;
  objectabs?: inputValue;
}
const initialState: analyticsinterface = {
  id: 0,
  name: "",
  mainnav: "",
  objectabs: {
    AdTitle: "",
    AdDescription: "",
  },
};

export const marketingSlice = createSlice({
  name: "marketing",
  initialState,
  reducers: {
    clickcard: (state, action) => {
      state.id = action.payload;
    },
    breadcrumdsname: (state, action) => {
      state.name = action.payload;
    },
    mainnav: (state, action) => {
      state.mainnav = action.payload;
    },
    updateabstitle: (state, action) => {
      state.objectabs = { ...state.objectabs, AdTitle: action.payload };
    },
    updateabsdescr: (state, action) => {
      state.objectabs = { ...state.objectabs, AdDescription: action.payload };
    },
  },
});

export const {
  clickcard,
  breadcrumdsname,
  mainnav,
  updateabstitle,
  updateabsdescr,
} = marketingSlice.actions;
export default marketingSlice.reducer;
