import { Subject, IStudent } from "@/types/hogwartsData";
import { v4 as uuidv4 } from "uuid";
import { hogwartsHierarchy } from "./teacher";

export const potionsMasterStandbyTeacherId = hogwartsHierarchy[2].id;
export const defenseAgainstDarkArtsStandbyTeachId = hogwartsHierarchy[5].id;

export const hogwartsStudents: IStudent[] = [
  {
    id: uuidv4(),
    name: "Harry Potter",
    subject: Subject.POTIONS_MASTER,
    allocatedTeacherId: hogwartsHierarchy[3].id,
    autoAssignTeacherId: null,
  },
  {
    id: uuidv4(),
    name: "Hermione Granger",
    subject: Subject.POTIONS_MASTER,
    allocatedTeacherId: null,
    autoAssignTeacherId: null,
  },
  {
    id: uuidv4(),
    name: "Ron Weasley",
    subject: Subject.POTIONS_MASTER,
    allocatedTeacherId: hogwartsHierarchy[4].id,
    autoAssignTeacherId: null,
  },
  {
    id: uuidv4(),
    name: "Draco Malfoy",
    subject: Subject.POTIONS_MASTER,
    allocatedTeacherId: hogwartsHierarchy[3].id,
    autoAssignTeacherId: null,
  },
  {
    id: uuidv4(),
    name: "Padma Patil",
    subject: Subject.POTIONS_MASTER,
    allocatedTeacherId: null,
    autoAssignTeacherId: null,
  },
  {
    id: uuidv4(),
    name: "Luna Lovegood",
    subject: Subject.POTIONS_MASTER,
    allocatedTeacherId: hogwartsHierarchy[4].id,
    autoAssignTeacherId: null,
  },
];
