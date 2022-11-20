from typing import Any, List

from app.models.schemas.classifier import ClassifierResponseSchema


def ResponseModel(
    *, message: str, success=True, data: List[ClassifierResponseSchema] = None
) -> dict:
    return {"success": success, "message": message, "data": data}
