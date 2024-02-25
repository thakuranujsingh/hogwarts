import { hogwartsStudents } from "@/models/student";
import { IAttendance, IStudent } from "@/types/hogwartsData";
import {
  PayloadAction,
  createAsyncThunk,
  createDraftSafeSelector,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "./store";
import { selectAllTeachers, selectTeacherById } from "./teacherSlice";
import { hierarchy } from "@/models/hierarchy";

const studentsAdapter = createEntityAdapter({
  selectId: (student: IStudent) => student.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const emptyState = studentsAdapter.getInitialState();

const initialState = studentsAdapter.upsertMany(emptyState, hogwartsStudents);

export const autoAssignTeacherThunk = createAsyncThunk(
  "students/autoAssignTeacher",
  async (studentId: string, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const currentStudent = { ...selectStudentById(state, studentId) };
    const subject = currentStudent.subject;

    // set default null auto assign teacher so we come back on current alocated teacher present
    currentStudent.autoAssignTeacherId = null;

    // get hierarchy teacher by subject
    const hierarchyTeachers = hierarchy[subject].teachers;

    const standByTeacher = hierarchyTeachers[0];

    if (!currentStudent.allocatedTeacherId) {
      currentStudent.allocatedTeacherId = standByTeacher.id;
    }
    // auto assign teacher as per attendance change
    if (
      selectTeacherById(state, currentStudent.allocatedTeacherId).attendance ==
      IAttendance.PRESENT
    ) {
      currentStudent.autoAssignTeacherId = currentStudent.allocatedTeacherId;
    } else {
      for (const t of hierarchyTeachers) {
        if (selectTeacherById(state, t.id).attendance == IAttendance.PRESENT) {
          currentStudent.autoAssignTeacherId = t.id;
          break;
        }
      }
    }

    return currentStudent;
  }
);

export const updateAllStudenOnAttandanceChangeThunk = createAsyncThunk(
  "students/updateAllTeachers",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const students = selectAllStudents(state);
    students.map((student) => {
      thunkAPI.dispatch(autoAssignTeacherThunk(student.id));
    });
  }
);

export const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    updateAssignTeacher: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;

      const student = state.entities[id];
      const hierarchyTeachers = hierarchy[student.subject].teachers;
      const standByTeacher = hierarchyTeachers[0];
      if (!student.allocatedTeacherId) {
        student.allocatedTeacherId = standByTeacher.id;
      }
      student.autoAssignTeacherId = standByTeacher.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(autoAssignTeacherThunk.fulfilled, (state, action) => {
      studentsAdapter.upsertOne(state, action.payload);
    });
  },
});

// Action creators are generated for each case reducer function

export const { selectAll: selectAllStudents, selectById: selectStudentById } =
  studentsAdapter.getSelectors((state: RootState) => state.students);

export default studentSlice.reducer;
