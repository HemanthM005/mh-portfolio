# Deployment Guide: Google Cloud Platform (Cloud Run)

This guide details how to deploy the `hemanth-portfolio` Next.js application to Google Cloud Run using Docker.

## Prerequisites

1.  **Google Cloud SDK**: Ensure `gcloud` CLI is installed and authenticated.
2.  **Docker**: Ensure Docker is installed and running locally.
3.  **GCP Project**: A Google Cloud Project with billing enabled.

## Step 1: Setup GCP Project

1.  **Login to Google Cloud**:
    ```bash
    gcloud auth login
    ```

2.  **Set your project ID**:
    ```bash
    gcloud config set project [YOUR_PROJECT_ID]
    ```

3.  **Enable required APIs**:
    ```bash
    gcloud services enable run.googleapis.com artifactregistry.googleapis.com
    ```

## Step 2: Create Artifact Registry

Create a Docker repository in Artifact Registry to store your container images.

```bash
gcloud artifacts repositories create portfolio-repo \
    --repository-format=docker \
    --location=us-central1 \
    --description="Docker repository for portfolio"
```

## Step 3: Build and Push Docker Image

1.  **Configure Docker to authenticate with GCP**:
    ```bash
    gcloud auth configure-docker us-central1-docker.pkg.dev
    ```

2.  **Build the image**:
    ```bash
    docker build -t us-central1-docker.pkg.dev/[YOUR_PROJECT_ID]/portfolio-repo/hemanth-portfolio:latest .
    ```
    *Replace `[YOUR_PROJECT_ID]` with your actual project ID.*

3.  **Push the image**:
    ```bash
    docker push us-central1-docker.pkg.dev/[YOUR_PROJECT_ID]/portfolio-repo/hemanth-portfolio:latest
    ```

## Step 4: Deploy to Cloud Run

Deploy the container to Cloud Run.

```bash
gcloud run deploy hemanth-portfolio \
    --image us-central1-docker.pkg.dev/[YOUR_PROJECT_ID]/portfolio-repo/hemanth-portfolio:latest \
    --platform managed \
    --region us-central1 \
    --allow-unauthenticated
```

## Step 5: Verify Deployment

After successful deployment, Cloud Run will provide a URL (e.g., `https://hemanth-portfolio-xyz-uc.a.run.app`). Open this URL in your browser to view your live portfolio.

## Local Testing (Optional)

To test the Docker image locally before deploying:

1.  **Build locally**:
    ```bash
    docker build -t portfolio-local .
    ```

2.  **Run container**:
    ```bash
    docker run -p 3000:3000 portfolio-local
    ```

3.  Visit `http://localhost:3000`.
