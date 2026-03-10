"""Exercises API: GET /api/exercises, GET /api/exercises/{id}."""

from fastapi import APIRouter, HTTPException

from models.dtoModels import ExerciseListItemDto, ExerciseDetailDto
from services import exercise_service

router = APIRouter(prefix="/exercises", tags=["exercises"])


@router.get("", response_model=list[ExerciseListItemDto])
def list_exercises():
    return exercise_service.list_exercises()


@router.get("/{id}", response_model=ExerciseDetailDto)
def get_exercise(id: int):
    exercise = exercise_service.get_exercise_by_id(id)
    if exercise is None:
        raise HTTPException(status_code=404, detail="Exercise not found")
    return exercise
