import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateAllStudenOnAttandanceChangeThunk } from "@/store/studentSlice";
import { selectTeacherById, updateAttendance } from "@/store/teacherSlice";

import { IAttendance, ITeacher } from "@/types/hogwartsData";
import { MenuItem, Select, TableCell, TableRow } from "@mui/material";
import { FC, memo } from "react";

interface IAttendanceRow {
  teacherId: string;
}

const AttendanceRowComponent: FC<IAttendanceRow> = ({ teacherId }) => {
  const dispatch = useAppDispatch();
  const teacher = useAppSelector((state) =>
    selectTeacherById(state, teacherId)
  );

  return (
    <TableRow data-testid={`teacher-${teacherId}`}>
      <TableCell>{teacher.name}</TableCell>
      <TableCell>
        <Select
          value={teacher.attendance}
          onChange={(e) => {
            console.log("event trigger", e);
            dispatch(
              updateAttendance({
                id: teacher.id,
                attendance: e.target.value as IAttendance,
              })
            );
            dispatch(updateAllStudenOnAttandanceChangeThunk());
          }}
        >
          <MenuItem value={IAttendance.PRESENT}>{IAttendance.PRESENT}</MenuItem>
          <MenuItem value={IAttendance.ABSENT}>{IAttendance.ABSENT}</MenuItem>
        </Select>
      </TableCell>
    </TableRow>
  );
};

export const AttendanceRow = memo(AttendanceRowComponent);
