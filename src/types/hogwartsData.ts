export enum Subject {
  POTIONS_MASTER = "Potions Master",
  DEFENSE_AGAINST_DARK_ARTS = "Defense Against the Dark Arts",
}

export enum Role {
  TEACHER = "Teacher",
  HEADMASTER = "Headmaster",
  HEADMISTRESS = "Headmistress",
}

export enum IAttendance {
  ABSENT = "Absent",
  PRESENT = "Present",
}

export interface ITeacher {
  id: string;
  name: string;
  role: Role;
  attendance: IAttendance;
  subject?: Subject;
  isStandByProfessor?: boolean;
  parentHierarchyIndex?: number; // to help terivarse the array
}

export interface IStudent {
  id: string;
  name: string;
  subject: Subject;
  allocatedTeacherId: string | null;
  autoAssignTeacherId: string | null;
}
