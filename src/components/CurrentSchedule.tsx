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
import { StudentRow } from "./StudentRow";

export const CurrentSchedule: FC = () => {
  const students = useAppSelector((state) => state.students).ids;
  return (
    <Box data-testid="schedule">
      <Typography variant="h3">Current schedule</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Student</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Teacher</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((id, index) => {
            return <StudentRow studentId={id} key={id} />;
          })}
        </TableBody>
      </Table>
    </Box>
  );
};
