# 🚀 DevOps Monitoring Dashboard
A full-stack DevOps Monitoring Dashboard built using React, Node.js, MongoDB, Docker, Kubernetes, Prometheus, and Grafana. The platform provides centralized monitoring, container management, deployment tracking, system logging, and infrastructure observability through an interactive web interface.

# 📌 Project Overview
Modern software applications require continuous monitoring, deployment automation, and infrastructure management. This project provides a unified dashboard to visualize and manage DevOps resources from a single interface.
The dashboard enables users to:
* Monitor system performance
* Track Docker containers
* View Kubernetes cluster information
* Monitor CI/CD pipeline status
* Analyze application logs
* Integrate with Prometheus and Grafana for observability

# 🎯 Objectives
* Build a centralized DevOps management platform
* Monitor system resources in real time
* Visualize deployment and infrastructure status
* Implement containerized application architecture
* Demonstrate DevOps practices using modern tools

# 🏗️ System Architecture
Frontend (React + Vite)
↓
Backend API (Node.js + Express)
↓
MongoDB Database
↓
Docker Containers
↓
Prometheus Monitoring
↓
Grafana Dashboards

# 🛠️ Technology Stack
## Frontend
* React.js
* Vite
* React Router DOM
* Axios
* Tailwind CSS
* Recharts
* Lucide Icons

## Backend
* Node.js
* Express.js
* WebSocket
* JWT Authentication
* Mongoose

## Database
* MongoDB

## DevOps Tools
* Docker
* Docker Compose
* Kubernetes
* Jenkins
* Prometheus
* Grafana

# 📂 Project Structure
DevOps Dashboard/

├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── Dockerfile
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── Dockerfile
│
├── monitoring/
│   ├── prometheus.yaml
│   └── grafana/
│
├── k8s/
│   ├── frontend-deployment.yaml
│   ├── backend-deployment.yaml
│   ├── mongodb-deployment.yaml
│   └── ingress.yaml
│
├── jenkins/
│   └── Jenkinsfile
│
└── docker-compose.yml

# ✨ Features

## 📊 Dashboard Monitoring
* CPU Usage Monitoring
* RAM Usage Monitoring
* Container Count
* System Health Status
* Monitoring Overview

## 🐳 Docker Management
* View Running Containers
* Container Status Monitoring
* Docker Infrastructure Overview

## ☸️ Kubernetes Dashboard
* Node Information
* Pod Monitoring
* Service Information
* Cluster Status

## 🔄 CI/CD Pipeline
* Build Information
* Deployment Status
* Branch Tracking
* Environment Monitoring

## 📝 Log Monitoring
* Backend Logs
* MongoDB Logs
* Prometheus Logs
* Grafana Logs
* System Events

## 📈 Monitoring & Observability
* Prometheus Metrics Collection
* Grafana Dashboard Visualization
* Resource Monitoring
* Infrastructure Insights

# 🔐 Authentication
The application includes:
* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Session Management

# 🐳 Docker Setup
Build and start all services:
docker compose up --build -d

Check running containers:
docker ps

Stop services:
docker compose down

View logs:
docker compose logs -f

# ☸️ Kubernetes Deployment
Apply Kubernetes configurations:
kubectl apply -f k8s/

Check pods:
kubectl get pods

Check services:
kubectl get svc

Check deployments:
kubectl get deployments

# 📊 Monitoring Setup
Prometheus URL:
http://localhost:9090

Grafana URL:
http://localhost:3001

Default Grafana Credentials:
Username: admin
Password: admin

# 🌐 Application URLs
Frontend:
http://localhost:3000

Backend Health Check:
http://localhost:5000/health

Prometheus:
http://localhost:9090

Grafana:
http://localhost:3001

# 🚀 Future Enhancements
* Real-Time Docker Container Control
* Kubernetes Resource Scaling
* Jenkins Build Triggering
* Alert Manager Integration
* Email Notifications
* Role-Based Access Control
* Cloud Deployment Support
* AI-Based Infrastructure Monitoring

# 📸 Screenshots
## Dashboard
<img width="956" height="397" alt="image" src="https://github.com/user-attachments/assets/b8a718d1-a6da-4c78-b93f-98cdd3886287" />
## Docker Page
<img width="957" height="376" alt="image" src="https://github.com/user-attachments/assets/3c550ca9-ae95-4751-ab52-a92aa70affd9" />
## Kubernetes Page
<img width="959" height="324" alt="image" src="https://github.com/user-attachments/assets/6ec5a070-f2d7-4fa4-bbb9-07b651699186" />
## CI/CD Page
<img width="959" height="320" alt="image" src="https://github.com/user-attachments/assets/f1574ae8-5d24-4778-90a5-ca76dc0319d0" />
## Logs Page
<img width="960" height="360" alt="image" src="https://github.com/user-attachments/assets/b547fb5d-beda-4175-8234-2601f8291e85" />
## Prometheus Dashboard
<img width="954" height="357" alt="image" src="https://github.com/user-attachments/assets/966a4d8c-f285-49d6-8026-255c324131d1" />
## Grafana Dashboard
<img width="569" height="501" alt="image" src="https://github.com/user-attachments/assets/375ab7b9-45b8-45a6-9130-2d1bee049583" />


# 📚 Learning Outcomes
Through this project, the following concepts were implemented:
* Full Stack Development
* REST API Development
* Authentication & Authorization
* Containerization using Docker
* Container Orchestration using Kubernetes
* CI/CD Concepts
* Infrastructure Monitoring
* Metrics Collection
* Dashboard Visualization
* DevOps Practices


