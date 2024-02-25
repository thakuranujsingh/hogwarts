import { FC, memo, useEffect } from "react";
import { TableCell, TableRow } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  autoAssignTeacherThunk,
  selectStudentById,
} from "@/store/studentSlice";
import { selectTeacherById } from "@/store/teacherSlice";

interface IStudentRow {
  studentId: string;
}
export const Student: FC<IStudentRow> = ({ studentId }) => {
  const student = useAppSelector((state) =>
    selectStudentById(state, studentId)
  );
  const currentTeacher = useAppSelector((state) =>
    selectTeacherById(state, student.autoAssignTeacherId ?? "")
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(autoAssignTeacherThunk(student.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableRow key={student.id} data-testid={`student-${student.id}`}>
      <TableCell>{student.name}</TableCell>
      <TableCell>{student.subject}</TableCell>
      <TableCell>{currentTeacher?.name ?? "Not assign"}</TableCell>
    </TableRow>
  );
};

export const StudentRow = memo(Student);
