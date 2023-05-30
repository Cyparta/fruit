import { configureStore } from "@reduxjs/toolkit";

import { api } from "../features/api/api";
import analyticsSlice from "@/features/analytics/analyticsSlice";
import marketingSlice from "@/features/marketing/marketingSlice";
import tableSlice from "@/features/table/tableSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    analytics: analyticsSlice,
    marketing: marketingSlice,
    table: tableSlice,
    // properties: propertiesSlice,
    // filter: filterSlice,
    // agent: agentSlice,
    // lang: langSlice,
    // building: buildingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
