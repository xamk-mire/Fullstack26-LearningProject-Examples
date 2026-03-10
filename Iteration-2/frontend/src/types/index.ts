// Domain models (mock data and service internals)
export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface Exercise {
  id: number;
  name: string;
  notes: string;
  date: string;
}

export interface ExerciseCategory {
  categoryId: number;
  exerciseId: number;
}

export interface ExerciseField {
  id: number;
  exerciseId: number;
  name: string;
  value: string;
  unit: string;
}

// DTOs (UI and data service API)
export interface CategoryDto {
  id: number;
  name: string;
  description: string;
}

export interface ExerciseFieldDto {
  id: number;
  name: string;
  value: string;
  unit: string;
}

export interface ExerciseListItemDto {
  id: number;
  name: string;
  date: string;
  notes: string;
  categories: CategoryDto[];
}

export interface ExerciseDetailDto {
  id: number;
  name: string;
  date: string;
  notes: string;
  categories: CategoryDto[];
  fields: ExerciseFieldDto[];
}
