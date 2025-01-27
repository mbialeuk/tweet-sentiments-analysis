# Tweet sentiment analysis

A machine learning project to predict the sentiment behind a given sentence.

## Prerequisites

1. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Install Node.js dependencies** (for end-to-end tests):
   ```bash
   cd frontend
   npm install
   ```

---

## How to Run the Application

1. **Start the backend server**:
   ```bash
   python backend/app.py
   ```

2. **Start the frontend server**:
   ```bash
   cd frontend
   npm start
   ```

---

## Running Tests

### Unit Tests
Run unit tests for backend logic:
```bash
pytest tests/test_unit/
```

### Integration Tests
Run integration tests to ensure components work together:
```bash
pytest tests/test_integration/
```

### End-to-End Tests
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install Cypress (if not already installed):
   ```bash
   npm install cypress --save-dev
   ```

3. Run Cypress tests in the Edge browser:
   ```bash
   npx cypress run --browser edge
   ```

---

## MLFlow for Experiment Tracking

1. **Start the MLFlow server**:
   ```bash
   mlflow ui
   ```

2. **Access the MLFlow interface**:
   Open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your web browser.

   - View logged metrics, parameters, and models for all experiments.

---

## Additional Notes

- Ensure all dependencies are installed before running the application or tests.
- For any issues or questions, please feel free to open an issue in this repository.

--- 

This updated README provides a clearer structure, improves formatting, and makes the instructions more user-friendly. Let me know if you need further adjustments!
