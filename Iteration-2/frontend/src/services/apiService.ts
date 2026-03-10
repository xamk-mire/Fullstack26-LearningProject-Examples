import {
  getCategories as apiGetCategories,
  getCategoryById as apiGetCategoryById,
  getExercises as apiGetExercises,
  getExerciseById as apiGetExerciseById,
} from '../api/exercisesApi';
import type {
  CategoryDto,
  ExerciseListItemDto,
  ExerciseDetailDto,
} from '../types';

export async function getCategories(): Promise<CategoryDto[]> {
  return apiGetCategories();
}

export async function getCategoryById(
  id: number
): Promise<CategoryDto | undefined> {
  const result = await apiGetCategoryById(id);
  return result ?? undefined;
}

export async function getExercises(): Promise<ExerciseListItemDto[]> {
  return apiGetExercises();
}

export async function getExerciseById(
  id: number
): Promise<ExerciseDetailDto | undefined> {
  const result = await apiGetExerciseById(id);
  return result ?? undefined;
}
