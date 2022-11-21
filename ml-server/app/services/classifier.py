from typing import Any, List, Union
from pathlib import Path
from PIL import Image
from transformers import pipeline

from app.models.schemas.classifier import ClassifierResponseSchema

imageType = Union[Image.Image, Any]

MODEL_BASE = "google/vit-base-patch16-224-in21k"
MODEL_NAME = "./mlmodels/vit-potatoes-plant-health-status/"


class ImageClassifier:
    def __init__(self):
        self.model_name = MODEL_NAME if Path(MODEL_NAME).exists() else MODEL_BASE
        self.classifier = pipeline("image-classification", model=self.model_name)

        if not Path(MODEL_NAME).exists():
            self.classifier.save_pretrained(MODEL_NAME)

    def predict(self, image: imageType) -> List[ClassifierResponseSchema]:
        result = self.classifier(image)
        return result
