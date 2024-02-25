import { Role, Subject, IAttendance, ITeacher } from "@/types/hogwartsData";

export const hogwartsTeachers: ITeacher[] = [
  {
    id: "1",
    attendance: IAttendance.PRESENT,
    name: "Professor Dumbledore",
    role: Role.HEADMASTER,
  },
  {
    id: "2",
    attendance: IAttendance.PRESENT,
    name: "Minerva McGonagall",
    role: Role.HEADMISTRESS,
  },
  //Potions Master
  {
    id: "3",
    attendance: IAttendance.PRESENT,
    name: "Rubeus Hagrid",
    role: Role.TEACHER,
    isStandByProfessor: true,
    subject: Subject.POTIONS_MASTER,
  },
  {
    id: "4",
    attendance: IAttendance.PRESENT,
    name: "Horace Slughorn",
    role: Role.TEACHER,
    subject: Subject.POTIONS_MASTER,
  },
  {
    id: "5",
    attendance: IAttendance.PRESENT,
    name: "Severus Snape",
    role: Role.TEACHER,
    subject: Subject.POTIONS_MASTER,
  },
  //Defense Against the Dark Arts
  {
    id: "6",
    attendance: IAttendance.PRESENT,
    name: "Alastor Moody",
    role: Role.TEACHER,
    isStandByProfessor: true,
    subject: Subject.DEFENSE_AGAINST_DARK_ARTS,
  },
  {
    id: "7",
    attendance: IAttendance.PRESENT,
    name: "Remus Lupin",
    role: Role.TEACHER,
    subject: Subject.DEFENSE_AGAINST_DARK_ARTS,
  },
  {
    id: "8",
    attendance: IAttendance.PRESENT,
    name: "Gilderoy Lockhart",
    role: Role.TEACHER,
    subject: Subject.DEFENSE_AGAINST_DARK_ARTS,
  },
];
