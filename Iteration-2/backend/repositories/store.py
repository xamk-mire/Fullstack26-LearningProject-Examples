"""Repository (data access layer): in-memory storage. Seed data matches frontend mock data."""

from typing import Optional

# Domain records (internal storage)
CategoryRecord = dict  # {"id": int, "name": str, "description": str}
ExerciseRecord = dict  # {"id": int, "name": str, "notes": str, "date": str}
ExerciseCategoryRecord = dict  # {"categoryId": int, "exerciseId": int}
ExerciseFieldRecord = dict  # {"id": int, "exerciseId": int, "name": str, "value": str, "unit": str}

_categories: list[CategoryRecord] = [
    {"id": 1, "name": "Cardio", "description": "Cardiovascular exercises"},
    {"id": 2, "name": "Strength", "description": "Resistance and weight training"},
    {"id": 3, "name": "Running", "description": "Running and jogging"},
    {"id": 4, "name": "Swimming", "description": "Pool and open water swimming"},
    {"id": 5, "name": "Trail", "description": "Trail and outdoor activities"},
]

_exercises: list[ExerciseRecord] = [
    {"id": 1, "name": "Bench press", "notes": "Flat bench, felt strong", "date": "2025-02-01T10:00:00Z"},
    {"id": 2, "name": "Morning run", "notes": "Easy 5k along the river", "date": "2025-02-02T07:30:00Z"},
    {"id": 3, "name": "Swimming laps", "notes": "30 min freestyle", "date": "2025-02-02T18:00:00Z"},
    {"id": 4, "name": "Squats", "notes": "Back squat 4x5", "date": "2025-02-03T09:00:00Z"},
    {"id": 5, "name": "Trail run", "notes": "Hilly 8k", "date": "2025-01-28T08:00:00Z"},
    {"id": 6, "name": "Deadlift", "notes": "Conventional 3x5", "date": "2025-02-01T10:45:00Z"},
]

_exercise_categories: list[ExerciseCategoryRecord] = [
    {"categoryId": 2, "exerciseId": 1},
    {"categoryId": 2, "exerciseId": 4},
    {"categoryId": 2, "exerciseId": 6},
    {"categoryId": 1, "exerciseId": 2},
    {"categoryId": 3, "exerciseId": 2},
    {"categoryId": 1, "exerciseId": 3},
    {"categoryId": 4, "exerciseId": 3},
    {"categoryId": 1, "exerciseId": 5},
    {"categoryId": 3, "exerciseId": 5},
    {"categoryId": 5, "exerciseId": 5},
]

_exercise_fields: list[ExerciseFieldRecord] = [
    {"id": 1, "exerciseId": 1, "name": "weight", "value": "100", "unit": "kg"},
    {"id": 2, "exerciseId": 1, "name": "sets", "value": "3", "unit": "reps"},
    {"id": 3, "exerciseId": 1, "name": "reps", "value": "8", "unit": "reps"},
    {"id": 4, "exerciseId": 2, "name": "distance", "value": "5", "unit": "km"},
    {"id": 5, "exerciseId": 2, "name": "duration", "value": "30", "unit": "min"},
    {"id": 6, "exerciseId": 3, "name": "duration", "value": "30", "unit": "min"},
    {"id": 7, "exerciseId": 3, "name": "laps", "value": "20", "unit": "laps"},
    {"id": 8, "exerciseId": 4, "name": "weight", "value": "120", "unit": "kg"},
    {"id": 9, "exerciseId": 4, "name": "sets", "value": "4", "unit": "reps"},
    {"id": 10, "exerciseId": 4, "name": "reps", "value": "5", "unit": "reps"},
    {"id": 11, "exerciseId": 5, "name": "distance", "value": "8", "unit": "km"},
    {"id": 12, "exerciseId": 5, "name": "duration", "value": "45", "unit": "min"},
    {"id": 13, "exerciseId": 6, "name": "weight", "value": "140", "unit": "kg"},
    {"id": 14, "exerciseId": 6, "name": "sets", "value": "3", "unit": "reps"},
    {"id": 15, "exerciseId": 6, "name": "reps", "value": "5", "unit": "reps"},
]


def get_all_categories() -> list[CategoryRecord]:
    return list(_categories)


def get_category_by_id(category_id: int) -> Optional[CategoryRecord]:
    for c in _categories:
        if c["id"] == category_id:
            return dict(c)
    return None


def get_all_exercises() -> list[ExerciseRecord]:
    return list(_exercises)


def get_exercise_by_id(exercise_id: int) -> Optional[ExerciseRecord]:
    for e in _exercises:
        if e["id"] == exercise_id:
            return dict(e)
    return None


def get_exercise_category_ids(exercise_id: int) -> list[int]:
    return [
        ec["categoryId"]
        for ec in _exercise_categories
        if ec["exerciseId"] == exercise_id
    ]


def get_exercise_fields(exercise_id: int) -> list[ExerciseFieldRecord]:
    return [
        {k: v for k, v in f.items() if k != "exerciseId"}
        for f in _exercise_fields
        if f["exerciseId"] == exercise_id
    ]
