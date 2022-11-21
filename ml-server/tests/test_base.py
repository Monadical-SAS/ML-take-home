def test_base(app_client):
    response = app_client.get("/")
    assert response.status_code == 200
    assert response.json()["message"].startswith("Welcome to the image classifier")


def test_classify(app_client):
    response = app_client.post(
        "/classify",
        files={"file": open("test_image.jpeg", "rb")},
    )
    assert response.status_code == 200
    assert response.json()["message"] == "Successful classification"
    assert response.json()["data"][0]["label"] == "healthy"
    assert response.json()["data"][0]["score"] > 0.9
