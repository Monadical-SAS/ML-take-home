from pydantic import BaseModel, Field


class ClassifierResponseSchema(BaseModel):
    label: str
    score: float