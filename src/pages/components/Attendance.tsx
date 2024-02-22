import { FC } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useAppSelector } from "@/store/hooks";

import { AttendanceRow } from "./AttendanceRow";

export const Attendance: FC = () => {
  const teachers = useAppSelector((state) => state.teachers);

  return (
    <Box>
      <Typography variant="h3">Attendance</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Teacher</TableCell>
            <TableCell>Attendence</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map((teacher, index) => {
            return (
              <AttendanceRow key={teacher.id} index={index} teacher={teacher} />
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};
