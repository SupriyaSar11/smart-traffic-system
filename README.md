# Smart Traffic Management System using Fog Computing and JWT Authentication

## Overview

This project implements a Smart Traffic Management System using a Fog Computing architecture combined with JWT-based authentication. The system dynamically analyzes traffic conditions and suggests optimized travel routes based on real-time inputs. A centralized gateway node coordinates multiple fog nodes that process traffic data locally, reducing latency and improving decision-making efficiency.

The project demonstrates the application of fog computing concepts in intelligent transportation systems, focusing on low latency, scalability, and secure access control.

---

## Key Features

- Fog computing based distributed processing
- Centralized gateway for intelligent route selection
- JWT-based secure authentication system
- Real-time traffic analysis and routing
- Interactive frontend dashboard with map visualization
- Modular and scalable system architecture

---

## System Architecture

The system follows a three-layer architecture:

1. **Frontend Layer**
   - React-based dashboard
   - User authentication and route request interface
   - Map visualization using Leaflet

2. **Gateway Layer**
   - FastAPI-based central controller
   - JWT authentication and authorization
   - Aggregates responses from fog nodes
   - Selects the optimal route using scoring logic

3. **Fog Node Layer**
   - Distributed processing nodes
   - Simulates real-time traffic conditions
   - Computes route metrics and traffic scores

---

## Technology Stack

### Backend
- Python
- FastAPI
- JWT (JSON Web Tokens)
- HTTPX (async communication)

### Frontend
- React (Vite)
- Material UI
- Leaflet Maps

### Architecture
- Fog Computing
- Distributed Systems
- REST APIs

---

## Functional Workflow

1. User logs in using JWT-based authentication.
2. Frontend sends route request to the gateway.
3. Gateway forwards requests to multiple fog nodes.
4. Fog nodes process traffic data and return metrics.
5. Gateway selects the best route based on scoring logic.
6. Selected route and visualization are displayed to the user.

---

## security Implementation

1. JWT-based authentication
2. Token-based authorization for protected routes
3. Secure communication between frontend and gateway

---

##  Screenshots

![alt text][def]


## Installation and Setup

### Backend Setup

```bash
cd fog-prototype/gateway
venv\Scripts\activate
uvicorn app.main:app --reload




[def]: image.png