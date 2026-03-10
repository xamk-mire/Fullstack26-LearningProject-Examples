"""Exercise service: use cases for exercises. Builds DTOs with categories and fields."""

from models.dtoModels import (
    CategoryDto,
    ExerciseFieldDto,
    ExerciseListItemDto,
    ExerciseDetailDto,
)
from repositories import store


def _categories_for_exercise(exercise_id: int) -> list[CategoryDto]:
    category_ids = store.get_exercise_category_ids(exercise_id)
    categories = []
    for cid in category_ids:
        cat = store.get_category_by_id(cid)
        if cat is not None:
            categories.append(CategoryDto(**cat))
    return categories


def list_exercises() -> list[ExerciseListItemDto]:
    exercises = store.get_all_exercises()
    result = []
    for e in exercises:
        categories = _categories_for_exercise(e["id"])
        result.append(
            ExerciseListItemDto(
                id=e["id"],
                name=e["name"],
                date=e["date"],
                notes=e["notes"],
                categories=categories,
            )
        )
    return result


def get_exercise_by_id(exercise_id: int) -> ExerciseDetailDto | None:
    exercise = store.get_exercise_by_id(exercise_id)
    if exercise is None:
        return None
    categories = _categories_for_exercise(exercise_id)
    raw_fields = store.get_exercise_fields(exercise_id)
    fields = [
        ExerciseFieldDto(id=f["id"], name=f["name"], value=f["value"], unit=f["unit"])
        for f in raw_fields
    ]
    return ExerciseDetailDto(
        id=exercise["id"],
        name=exercise["name"],
        date=exercise["date"],
        notes=exercise["notes"],
        categories=categories,
        fields=fields,
    )
