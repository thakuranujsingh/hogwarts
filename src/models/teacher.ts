import { Role, Subject, IAttendance, ITeacher } from "@/types/hogwartsData";
import { v4 as uuidv4 } from "uuid";

export const hogwartsHierarchy: ITeacher[] = [
  {
    id: uuidv4(),
    attendance: IAttendance.PRESENT,
    name: "Professor Dumbledore",
    role: Role.HEADMASTER,
  },
  {
    id: uuidv4(),
    attendance: IAttendance.PRESENT,
    name: "Minerva McGonagall",
    role: Role.HEADMISTRESS,
    parentHierarchyIndex: 0,
  },
  //Potions Master
  {
    id: uuidv4(),
    attendance: IAttendance.PRESENT,
    name: "Rubeus Hagrid",
    role: Role.TEACHER,
    parentHierarchyIndex: 1,
    isStandByProfessor: true,
    subject: Subject.POTIONS_MASTER,
  },
  {
    id: uuidv4(),
    attendance: IAttendance.PRESENT,
    name: "Horace Slughorn",
    role: Role.TEACHER,
    parentHierarchyIndex: 2,
    subject: Subject.POTIONS_MASTER,
  },
  {
    id: uuidv4(),
    attendance: IAttendance.PRESENT,
    name: "Severus Snape",
    role: Role.TEACHER,
    parentHierarchyIndex: 2,
    subject: Subject.POTIONS_MASTER,
  },
  //Defense Against the Dark Arts
  {
    id: uuidv4(),
    attendance: IAttendance.PRESENT,
    name: "Alastor Moody",
    role: Role.TEACHER,
    parentHierarchyIndex: 1,
    isStandByProfessor: true,
    subject: Subject.DEFENSE_AGAINST_DARK_ARTS,
  },
  {
    id: uuidv4(),
    attendance: IAttendance.PRESENT,
    name: "Remus Lupin",
    role: Role.TEACHER,
    parentHierarchyIndex: 5,
    subject: Subject.DEFENSE_AGAINST_DARK_ARTS,
  },
  {
    id: uuidv4(),
    attendance: IAttendance.PRESENT,
    name: "Gilderoy Lockhart",
    role: Role.TEACHER,
    parentHierarchyIndex: 5,
    subject: Subject.DEFENSE_AGAINST_DARK_ARTS,
  },
];
