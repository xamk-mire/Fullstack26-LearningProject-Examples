import type { ExerciseField } from '../types';

export const mockExerciseFields: ExerciseField[] = [
  { id: 1, exerciseId: 1, name: 'weight', value: '100', unit: 'kg' },
  { id: 2, exerciseId: 1, name: 'sets', value: '3', unit: 'reps' },
  { id: 3, exerciseId: 1, name: 'reps', value: '8', unit: 'reps' },
  { id: 4, exerciseId: 2, name: 'distance', value: '5', unit: 'km' },
  { id: 5, exerciseId: 2, name: 'duration', value: '30', unit: 'min' },
  { id: 6, exerciseId: 3, name: 'duration', value: '30', unit: 'min' },
  { id: 7, exerciseId: 3, name: 'laps', value: '20', unit: 'laps' },
  { id: 8, exerciseId: 4, name: 'weight', value: '120', unit: 'kg' },
  { id: 9, exerciseId: 4, name: 'sets', value: '4', unit: 'reps' },
  { id: 10, exerciseId: 4, name: 'reps', value: '5', unit: 'reps' },
  { id: 11, exerciseId: 5, name: 'distance', value: '8', unit: 'km' },
  { id: 12, exerciseId: 5, name: 'duration', value: '45', unit: 'min' },
  { id: 13, exerciseId: 6, name: 'weight', value: '140', unit: 'kg' },
  { id: 14, exerciseId: 6, name: 'sets', value: '3', unit: 'reps' },
  { id: 15, exerciseId: 6, name: 'reps', value: '5', unit: 'reps' },
];
