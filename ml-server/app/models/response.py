from typing import Any

from app.models.schemas.classifier import ClassifierResponseSchema


def ResponseModel(
    *, message: str, success=True, data: ClassifierResponseSchema = None
) -> dict:
    return {"success": success, "message": message, "data": data}
