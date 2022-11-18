import pytest
from httpx import AsyncClient
from fastapi.testclient import TestClient

from app.app import app


@pytest.fixture(scope="module")
def app_client():
    client = TestClient(app)
    yield client


@pytest.fixture
async def async_app_client():
    async with AsyncClient(app=app, base_url='https://servertest') as client:
        yield client
