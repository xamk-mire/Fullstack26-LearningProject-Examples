"""Pydantic DTO models for API responses. Match frontend types in frontend/src/types/index.ts."""

from pydantic import BaseModel


class CategoryDto(BaseModel):
    id: int
    name: str
    description: str


class ExerciseFieldDto(BaseModel):
    id: int
    name: str
    value: str
    unit: str


class ExerciseListItemDto(BaseModel):
    id: int
    name: str
    date: str
    notes: str
    categories: list[CategoryDto]


class ExerciseDetailDto(BaseModel):
    id: int
    name: str
    date: str
    notes: str
    categories: list[CategoryDto]
    fields: list[ExerciseFieldDto]
