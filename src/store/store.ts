import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from "./teacherSlice";
import studentReducer from "./studentSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      teachers: teacherReducer,
      sdudents: studentReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
