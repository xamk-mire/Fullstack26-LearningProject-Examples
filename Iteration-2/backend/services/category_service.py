"""Category service: use cases for categories. Calls repository only."""

from models.dtoModels import CategoryDto
from repositories import store


def list_categories() -> list[CategoryDto]:
    categories = store.get_all_categories()
    return [CategoryDto(**c) for c in categories]


def get_category_by_id(category_id: int) -> CategoryDto | None:
    row = store.get_category_by_id(category_id)
    if row is None:
        return None
    return CategoryDto(**row)
