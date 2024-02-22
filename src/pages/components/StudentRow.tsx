import { FC, memo, useCallback, useEffect, useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { IAttendance, IStudent } from "@/types/hogwartsData";
import { selectTeacherById } from "@/store/teacherSlice";
import { autoAssignTeacherThunk } from "@/store/studentSlice";

interface IStudentRow {
  index: number;
  student: IStudent;
}
export const Student: FC<IStudentRow> = ({ index, student }) => {
  const currentTeacher = useAppSelector((state) =>
    selectTeacherById(state, student.allocatedTeacherId)
  );
  const autoAssignTeacher = useAppSelector((state) =>
    selectTeacherById(state, student.autoAssignTeacherId)
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      student.allocatedTeacherId == null &&
      student.autoAssignTeacherId == null
    ) {
      dispatch(autoAssignTeacherThunk({ index, subject: student.subject }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [allocatedTeacher, setAllocatedTeacher] = useState("Not Assigned");

  const updateState = useCallback(() => {
    if (currentTeacher?.attendance == IAttendance.PRESENT) {
      setAllocatedTeacher(currentTeacher.name);
    } else if (autoAssignTeacher?.attendance == IAttendance.PRESENT) {
      setAllocatedTeacher(autoAssignTeacher.name);
    } else {
      setAllocatedTeacher("Not Assigned");
    }
  }, [
    autoAssignTeacher?.attendance,
    autoAssignTeacher?.name,
    currentTeacher?.attendance,
    currentTeacher?.name,
  ]);

  useEffect(() => {
    updateState();
  }, [student.allocatedTeacherId, updateState]);
  return (
    <TableRow key={student.id}>
      <TableCell>{student.name}</TableCell>
      <TableCell>{student.subject}</TableCell>
      <TableCell>{allocatedTeacher}</TableCell>
    </TableRow>
  );
};

export const StudentRow = memo(Student);
