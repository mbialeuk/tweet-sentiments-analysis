from flask import Flask, request, jsonify
from flask_cors import CORS
from joblib import load

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Charger les modèles sauvegardés
import os

current_dir = os.path.dirname(os.path.abspath(__file__))
vectoriser = load(os.path.join(current_dir, 'vectoriser.joblib'))
model = load(os.path.join(current_dir, 'sentiment_LR.joblib'))


@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    if 'text' not in data:
        return jsonify({'error': 'No text provided'}), 400

    text = data['text']
    # Transformer le texte en vecteurs
    text_vectorized = vectoriser.transform([text])
    # Prédiction
    prediction = model.predict(text_vectorized)[0]
    if prediction > 0.5:
        sentiment = 'Positive'
    elif prediction < 0.5:
        sentiment = 'Negative'
    else:
        sentiment = 'Neutral'
    
    return jsonify({'sentiment': sentiment})

@app.route('/', methods=['GET'])
def home():
    return "API is working. Use /predict to send text for sentiment analysis."

if __name__ == '__main__':
    app.run(debug=True)
