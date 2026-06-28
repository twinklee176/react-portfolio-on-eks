#  React Portfolio Deployment on Amazon EKS

A React Portfolio application on Amazon Elastic Kubernetes Service (EKS) using Docker and Kubernetes.

---

### Workflow

```
React Application
        │
        ▼
Docker Image
        │
        ▼
Docker Hub
        │
        ▼
Amazon EKS Cluster
        │
        ▼
Kubernetes Deployment
        │
        ▼
LoadBalancer Service
        │
        ▼
Application Accessible via Browser
```

# Repository Structure

```
react-portfolio-on-eks/
│
├── src/
│   ├── App.js
│   ├── App.css
|
├── Dockerfile
├── deployment.yaml
├── service.yaml
├── .gitignore
└── README.md
```
##  Custom Files

### `src/App.js`

Contains the React portfolio layout including:
- Hero section
- About section
- Projects
- Skills
- Contact information

### `src/App.css`

Contains:
- Responsive styling
- Gradient background
- Card layouts
- Buttons
- Animations
- Footer styling
---

# ⚙ Installation

```bash

cd react-portfolio-on-eks
```

---

## Install Dependencies

```bash
npm install
```

---

## Run React Application

```bash
npm start
```

Open

```
http://localhost:3000
```

---

## Build React App

```bash
npm run build
```

---

#  Docker Commands

## Build Image

```bash
docker build -t react-portfolio .
```

## Verify Image

```bash
docker images
```

## Run Container

```bash
docker run -d --name react-app -p 8080:80 react-portfolio
```

## Verify Running Containers

```bash
docker ps
```

Open

```
http://localhost:8080
```

---

#  Push Docker Image

## Login

```bash
docker login
```

## Tag Image

```bash
docker tag react-portfolio <dockerhub-username>/react-portfolio:v1
```

Example

```bash
docker tag react-portfolio twinkle176/react-portfolio:v1
```

## Push Image

```bash
docker push <dockerhub-username>/react-portfolio:v1
```

---

#  AWS CLI Configuration

```bash
aws configure
```

Verify

```bash
aws sts get-caller-identity
```

---

#  Install kubectl

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

chmod +x kubectl

sudo mv kubectl /usr/local/bin/

kubectl version --client
```

---

#  Install eksctl

```bash
ARCH=amd64

PLATFORM=Linux_amd64

curl -sLO "https://github.com/eksctl-io/eksctl/releases/latest/download/eksctl_${PLATFORM}.tar.gz"

tar -xzf eksctl_${PLATFORM}.tar.gz

sudo mv eksctl /usr/local/bin

eksctl version
```

---

#  Create Amazon EKS Cluster

```bash
eksctl create cluster \
--name my-eks \
--region ap-south-1 \
--version 1.31 \
--nodegroup-name workers \
--node-type t3.small \
--nodes 2 \
--nodes-min 2 \
--nodes-max 2 \
--managed
```

---

# Verify Cluster

```bash
kubectl get nodes
```

---

#  Deploy Application

```bash
kubectl apply -f deployment.yaml
```

Verify

```bash
kubectl get deployment

kubectl get pods
```

---

# Expose Service

```bash
kubectl apply -f service.yaml
```

Verify

```bash
kubectl get svc
```

Wait until the LoadBalancer DNS is created.

Example

```
a123456789.ap-south-1.elb.amazonaws.com
```

Open it in your browser.

---

#  Clean Up

Delete Service

```bash
kubectl delete -f service.yaml
```

Delete Deployment

```bash
kubectl delete -f deployment.yaml
```

Delete Cluster

```bash
eksctl delete cluster --name my-eks --region ap-south-1
```
