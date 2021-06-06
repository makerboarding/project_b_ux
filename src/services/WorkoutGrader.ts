import { IWorkoutGrade} from '../lib/IWorkoutGrade'
import { GradeData } from '../lib/WorkoutGradeData';

export const gradeForWorkout = (fps: number, distanceFeet: number): string => {
  const distanceGrades: Array<IWorkoutGrade> = GradeData.grades.filter((grade: IWorkoutGrade) => {
    return grade.distanceFeet == distanceFeet;
  });
  if (distanceGrades) {
    // grades are sorted in decsending order
    const grade: IWorkoutGrade | undefined = distanceGrades.find((grade: IWorkoutGrade) => {
      return grade.fps < fps
    })
    if (grade) return `${grade.grade}`
  }
  return '0';
};
