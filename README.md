# FundFlow AI 📈 – Mutual Fund Portfolio Optimizer

## Project Overview FundFlow AI is a full-stack financial technology (FinTech) application designed to automate investment strategy generation. As a licensed Mutual Fund Distributor, I developed this tool to bridge the gap between complex financial regulations and user-friendly technology. The tool analyzes user risk tolerance and provides optimized asset allocations between Equity and Debt based on industry-standard risk-reward models.

## 🚀 Key Features

Interactive Risk Assessment: A custom-built slider allows users to select risk levels from 1 to 10.

Automated Engine: The backend instantly calculates specific Equity vs. Debt percentages.

Professional Logic: All strategies are based on real-world Mutual Fund distribution principles.

Full-Stack Handshake: Demonstrates seamless communication between a React frontend and a FastAPI backend.

## 🛠️ Technical Stack

Frontend: React.js (Hooks and State Management).

Backend: Python 3.9+, FastAPI, and Uvicorn.

Hosting/Development: Developed on MacBook Air.

## 📂 Repository Structure

Plaintext
**FundFlow-AI/**
├── **backend/** # **FastAPI Python server**
│   ├── **main.py** # **API Routing**
│   └── **optimizer.py** # **Financial allocation logic**
├── **frontend-new/** # **React.js dashboard**
│   ├── **src/**
│   │   └── **App.js** # **Main UI component**
└── **README.md**
## ⚙️ How to Run Locally

### 1. Start the Backend

Bash
**cd backend**
**python3 -m uvicorn main:app --reload**
The backend will run on http://localhost:8000.

### 2. Start the Frontend

Bash
**cd frontend-new**
**npm start**
The dashboard will open on http://localhost:3000.

## 👤 About the Developer I am a first-year BCA student at YCMOU and a Licensed Mutual Fund Distributor. This project is a core part of my software engineering portfolio, showcasing my ability to build data-driven applications that solve real-world financial problems. It sits alongside my other projects like VocalNeuro-AI and the AI-Emotion-Detector.
