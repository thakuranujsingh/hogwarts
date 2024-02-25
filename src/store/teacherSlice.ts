import { hogwartsTeachers } from "@/models/teacher";
import { IAttendance, ITeacher } from "@/types/hogwartsData";
import {
  PayloadAction,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { RootState } from "./store";

const teachersAdapter = createEntityAdapter({
  selectId: (teacher: ITeacher) => teacher.id,

  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const emptyState = teachersAdapter.getInitialState();

const initialState = teachersAdapter.upsertMany(emptyState, hogwartsTeachers);

export const teacherSlice = createSlice({
  name: "teachers",
  initialState: initialState,
  reducers: {
    updateAttendance: (
      state,
      action: PayloadAction<{ id: string; attendance: IAttendance }>
    ) => {
      const { id, attendance } = action.payload;
      const teacher = state.entities[id];
      if (teacher) {
        teacher.attendance = attendance;
        teachersAdapter.upsertOne(state, teacher);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectAll: selectAllTeachers, selectById: selectTeacherById } =
  teachersAdapter.getSelectors((state: RootState) => state.teachers);

export const { updateAttendance } = teacherSlice.actions;

export default teacherSlice.reducer;
