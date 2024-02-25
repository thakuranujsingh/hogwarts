import { Subject, IStudent } from "@/types/hogwartsData";

import { hogwartsTeachers } from "./teacher";

export const hogwartsStudents: IStudent[] = [
  {
    id: "1",
    name: "Harry Potter",
    subject: Subject.POTIONS_MASTER,
    allocatedTeacherId: hogwartsTeachers[3].id,
    autoAssignTeacherId: null,
  },
  {
    id: "2",
    name: "Hermione Granger",
    subject: Subject.POTIONS_MASTER,
    allocatedTeacherId: null,
    autoAssignTeacherId: null,
  },
  {
    id: "3",
    name: "Ron Weasley",
    subject: Subject.POTIONS_MASTER,
    allocatedTeacherId: hogwartsTeachers[4].id,
    autoAssignTeacherId: null,
  },
  {
    id: "4",
    name: "Draco Malfoy",
    subject: Subject.POTIONS_MASTER,
    allocatedTeacherId: hogwartsTeachers[3].id,
    autoAssignTeacherId: null,
  },
  {
    id: "5",
    name: "Padma Patil",
    subject: Subject.POTIONS_MASTER,
    allocatedTeacherId: null,
    autoAssignTeacherId: null,
  },
  {
    id: "6",
    name: "Luna Lovegood",
    subject: Subject.POTIONS_MASTER,
    allocatedTeacherId: hogwartsTeachers[4].id,
    autoAssignTeacherId: null,
  },
];
