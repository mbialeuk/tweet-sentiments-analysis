# real-estate-price-prediction
A machine learning project to predict the price of real estate accros FRANCE

to run our app:

install the requierements:
    pip install -r requirements.txt

test:
unit: pytest tests/test_unit/ 

integration: pytest tests/test_integration/

e2e:
    navigate to : cd frontend
    npm install cypress --save-dev

    npx cypress run --browser edge


# Lancer le serveur MLFlow localement (à exécuter dans une autre console)
# mlflow ui
# Accédez à http://127.0.0.1:5000 pour voir les runs et les modèles enregistrés.

