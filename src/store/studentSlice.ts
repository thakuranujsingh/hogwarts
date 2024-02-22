import { hogwartsStudents } from "@/models/student";
import { IAttendance, IStudent, Subject } from "@/types/hogwartsData";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type autoAssignTeacherReqParm = {
  index: number;
  subject: Subject;
};

export const autoAssignTeacherThunk = createAsyncThunk(
  "students/autoAssignTeacher",
  async ({ index, subject }: autoAssignTeacherReqParm, thunkAPI) => {
    const teachersState = (thunkAPI.getState() as RootState).teachers;

    const standbyProfessorIndex = teachersState.findIndex(
      (teacher) => teacher.subject == subject
    );

    if (
      teachersState[standbyProfessorIndex].attendance == IAttendance.PRESENT
    ) {
      const teacherId = teachersState[standbyProfessorIndex].id;
      return {
        index,
        subject,
        teacherId,
      };
    }

    for (let i = standbyProfessorIndex; i >= 0; i--) {
      if (teachersState[i].attendance == IAttendance.PRESENT) {
        const teacherId = teachersState[i].id;
        return {
          index,
          subject,
          teacherId,
        };
      }
    }

    return { index, subject, teacherId: null };
  }
);

export const updateAllStudents = createAsyncThunk(
  "students/updateAllStudentTeacherById",
  async (_, thunkAPI) => {
    const studentState = (thunkAPI.getState() as RootState).sdudents;
    studentState.forEach((student, index) => {
      thunkAPI.dispatch(
        autoAssignTeacherThunk({ index, subject: student.subject })
      );
    });
  }
);

const initialState: IStudent[] = hogwartsStudents;

export const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(autoAssignTeacherThunk.fulfilled, (state, action) => {
      const index = action.payload.index;
      if (state[index].allocatedTeacherId == null) {
        state[index].allocatedTeacherId = action.payload.teacherId;
      }
      state[index].autoAssignTeacherId = action.payload.teacherId;
    });
  },
});

// Action creators are generated for each case reducer function

export default studentSlice.reducer;
