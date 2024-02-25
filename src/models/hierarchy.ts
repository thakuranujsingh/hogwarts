import { Subject } from "@/types/hogwartsData";
import { hogwartsTeachers } from "./teacher";

export const hierarchy = {
  [Subject.POTIONS_MASTER]: {
    name: Subject.POTIONS_MASTER,
    teachers: [
      {
        id: hogwartsTeachers[2].id,
        name: hogwartsTeachers[2].name,
      },
      {
        id: hogwartsTeachers[1].id,
        name: hogwartsTeachers[1].name,
      },
      {
        id: hogwartsTeachers[0].id,
        name: hogwartsTeachers[0].name,
      },
    ],
  },
  [Subject.DEFENSE_AGAINST_DARK_ARTS]: {
    name: Subject.DEFENSE_AGAINST_DARK_ARTS,
    teachers: [
      {
        id: hogwartsTeachers[5].id,
        name: hogwartsTeachers[5].name,
      },
      {
        id: hogwartsTeachers[1].id,
        name: hogwartsTeachers[1].name,
      },
      {
        id: hogwartsTeachers[0].id,
        name: hogwartsTeachers[0].name,
      },
    ],
  },
};
