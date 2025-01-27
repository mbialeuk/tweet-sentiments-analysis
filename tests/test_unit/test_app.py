import pytest
import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../../notebooks')))

from app import app  # Importez app après avoir modifié sys.path


@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_home(client):
    response = client.get('/')
    assert response.status_code == 200
    assert b"API is working" in response.data

def test_missing_text(client):
    response = client.post('/predict', json={})
    assert response.status_code == 400
    assert response.json['error'] == "No text provided"

def test_predict_positive(client):
    response = client.post('/predict', json={"text": "I love this!"})
    assert response.status_code == 200
    assert response.json['sentiment'] == "Positive"
