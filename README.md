---

# Sentiment Analysis with CI/CD Pipeline

This project is designed to perform sentiment analysis using machine learning. It includes a backend API (Flask), a frontend (React), and a complete CI/CD pipeline for building, testing, and deploying the application.

---

## Prerequisites

### **1. Clone the repository**
```bash
git clone https://github.com/<username>/sentiment-analyzer.git
cd sentiment-analyzer
```

### **2. Install required dependencies**

#### For the backend:
```bash
pip install -r requirements.txt
```

#### For the frontend:
```bash
cd frontend
npm install
```

### **3. Docker Installation**
Ensure Docker and Docker Compose are installed on your system:
- [Docker Installation Guide](https://docs.docker.com/get-docker/)
- [Docker Compose Guide](https://docs.docker.com/compose/install/)

---

## How to Run the Application Locally

### **1. Start the backend server**
```bash
cd notebooks
python app.py
```

### **2. Start the frontend server**
```bash
cd frontend
npm start
```

The application should now be accessible at [http://localhost:3000](http://localhost:3000).

---

## Running with Docker

### **1. Build and run the containers**
```bash
docker-compose up --build
```

### **2. Verify the services**
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend**: [http://localhost:5000](http://localhost:5000)

### **3. Stop the containers**
```bash
docker-compose down
```

---

## CI/CD Pipeline

This project uses **GitHub Actions** to automate testing and deployment. Below are the key steps in the pipeline:

### **1. Pull Request to `dev` Branch**
- **Run integration tests** for the backend.
- If successful, push the changes to the `staging` branch.

### **2. Push to `staging` Branch**
- Install backend and frontend dependencies.
- Start the backend and frontend servers.
- **Run unit tests** for the backend.
- **Run end-to-end (E2E) tests** with Cypress.
- If all tests pass, push the changes to the `main` branch.

### **3. Push to `main` Branch**
- Build Docker images for the backend and frontend.
- Push the Docker images to DockerHub.
- Deploy the application to the production environment.

---

## Running Tests

### **Unit Tests**
To test individual components of the backend:
```bash
pytest tests/test_unit/
```

### **Integration Tests**
To ensure components interact as expected:
```bash
pytest tests/test_integration/
```

### **End-to-End Tests**
To validate the entire application workflow:
```bash
cd frontend
npx cypress run
```

---

## Deployment

The CI/CD pipeline includes steps to build Docker images and deploy them to a production server or cloud platform (e.g., AWS, Kubernetes, Azure). To deploy manually:
1. **Build and push backend Docker image**:
   ```bash
   docker build -t <dockerhub_username>/sentiment-analyzer_backend:latest notebooks/
   docker push <dockerhub_username>/sentiment-analyzer_backend:latest
   ```

2. **Build and push frontend Docker image**:
   ```bash
   docker build -t <dockerhub_username>/sentiment-analyzer_frontend:latest frontend/
   docker push <dockerhub_username>/sentiment-analyzer_frontend:latest
   ```

---

## MLFlow for Experiment Tracking

1. **Start the MLFlow server**:
   ```bash
   mlflow ui
   ```

2. **Access MLFlow**:
   Open [http://127.0.0.1:5000](http://127.0.0.1:5000) to view experiments, metrics, and model artifacts.

---

## Troubleshooting

1. **Backend/Frontend not starting**:
   - Check the logs:
     ```bash
     docker-compose logs backend
     docker-compose logs frontend
     ```

2. **Cypress tests failing**:
   - Ensure the backend and frontend are running before starting the tests.
   - Debug Cypress interactively:
     ```bash
     npx cypress open
     ```

---
