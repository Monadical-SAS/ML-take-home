from typing import Any, Union
from PIL import Image

from app.models.schemas.classifier import ClassifierResponseSchema

imageType = Union[Image.Image, Any]

async def get_image_classification(image: imageType)-> ClassifierResponseSchema:
    pass