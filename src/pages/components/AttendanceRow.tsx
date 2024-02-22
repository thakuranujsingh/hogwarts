import { useAppDispatch } from "@/store/hooks";
import { updateAllStudents } from "@/store/studentSlice";
import { updateAttendence } from "@/store/teacherSlice";
import { IAttendance, ITeacher } from "@/types/hogwartsData";
import { MenuItem, Select, TableCell, TableRow } from "@mui/material";
import { FC, memo } from "react";

interface IAttendanceRow {
  index: number;
  teacher: ITeacher;
}

const AttendanceRowComponent: FC<IAttendanceRow> = ({ index, teacher }) => {
  const dispatch = useAppDispatch();

  return (
    <TableRow>
      <TableCell>{teacher.name}</TableCell>
      <TableCell>
        <Select
          value={teacher.attendance}
          onChange={(e) => {
            dispatch(
              updateAttendence({
                index,
                attendence: e.target.value as IAttendance,
              })
            );
            dispatch(updateAllStudents());
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
