import type {
  CategoryDto,
  ExerciseListItemDto,
  ExerciseDetailDto,
} from '../types';
import { getApiBaseUrl } from './config';

const base = () => getApiBaseUrl();

export async function getCategories(): Promise<CategoryDto[]> {
  const res = await fetch(`${base()}/api/categories`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export async function getCategoryById(
  id: number
): Promise<CategoryDto | null> {
  const res = await fetch(`${base()}/api/categories/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Failed to fetch category');
  return res.json();
}

export async function getExercises(): Promise<ExerciseListItemDto[]> {
  const res = await fetch(`${base()}/api/exercises`);
  if (!res.ok) throw new Error('Failed to fetch exercises');
  return res.json();
}

export async function getExerciseById(
  id: number
): Promise<ExerciseDetailDto | null> {
  const res = await fetch(`${base()}/api/exercises/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Failed to fetch exercise');
  return res.json();
}
