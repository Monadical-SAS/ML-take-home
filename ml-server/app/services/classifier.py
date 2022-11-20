from typing import Any, List, Union

from PIL import Image
from transformers import pipeline

from app.models.schemas.classifier import ClassifierResponseSchema

imageType = Union[Image.Image, Any]

MODEL_NAME = "./mlmodels/vit-potatoes-plant-health-status/"


class ImageClassifier:
    def __init__(self):
        self.classifier = pipeline("image-classification", model=MODEL_NAME)

    def predict(self, image: imageType) -> List[ClassifierResponseSchema]:
        result = self.classifier(image)
        return result
