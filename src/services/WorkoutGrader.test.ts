import { render, screen } from '@testing-library/react';
import { gradeForWorkout } from './WorkoutGrader';

test('tests results of grades', () => {
  const fps = 55.0;
  const distanceFeet = 3960;
  expect(gradeForWorkout(fps, distanceFeet)).toEqual('4');
});
