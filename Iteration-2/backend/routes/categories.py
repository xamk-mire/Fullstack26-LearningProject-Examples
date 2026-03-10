"""Categories API: GET /api/categories, GET /api/categories/{id}."""

from fastapi import APIRouter, HTTPException

from models.dtoModels import CategoryDto
from services import category_service

router = APIRouter(prefix="/categories", tags=["categories"])


@router.get("", response_model=list[CategoryDto])
def list_categories():
    return category_service.list_categories()


@router.get("/{id}", response_model=CategoryDto)
def get_category(id: int):
    category = category_service.get_category_by_id(id)
    if category is None:
        raise HTTPException(status_code=404, detail="Category not found")
    return category
