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
  const teachers = useAppSelector((state) => state.teachers).ids;

  return (
    <Box data-testid="attendance">
      <Typography variant="h3">Attendance</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Teacher</TableCell>
            <TableCell>Attendance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map((teacherId, index) => {
            return <AttendanceRow key={teacherId} teacherId={teacherId} />;
          })}
        </TableBody>
      </Table>
    </Box>
  );
};
