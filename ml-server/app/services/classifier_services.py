
from app.repository import classifier_repository

async def get_image_classification():
    return classifier_repository.get_classification()