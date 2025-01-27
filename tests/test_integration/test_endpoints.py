import pytest
from joblib import load

@pytest.fixture
def vectoriser():
    return load('notebooks/vectoriser.joblib')

@pytest.fixture
def model():
    return load('notebooks/sentiment_LR.joblib')

def test_model_load(vectoriser, model):
    assert vectoriser is not None
    assert model is not None

def test_vectorisation(vectoriser):
    text = ["I love this!"]
    vectorised = vectoriser.transform(text)
    assert vectorised.shape[0] == 1

def test_prediction(vectoriser, model):
    text = ["I hate this!"]
    vectorised = vectoriser.transform(text)
    prediction = model.predict(vectorised)[0]
    assert prediction <= 0.5  # Sentiment négatif attendu
