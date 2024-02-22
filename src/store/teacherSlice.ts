import { hogwartsHierarchy } from "@/models/teacher";
import { IAttendance, ITeacher } from "@/types/hogwartsData";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: ITeacher[] = hogwartsHierarchy;

export const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    updateAttendence: (
      state,
      action: PayloadAction<{ index: number; attendence: IAttendance }>
    ) => {
      const teacher = { ...state[action.payload.index] };
      teacher.attendance = action.payload.attendence;
      state[action.payload.index] = { ...teacher }; // replace the original teacher in the state
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateAttendence } = teacherSlice.actions;

export const selectTeacherById = (state: RootState, teacherId: string | null) =>
  state.teachers.find((teacher) => teacher.id === teacherId);

export default teacherSlice.reducer;
