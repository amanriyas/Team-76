# Team-76
Team 76 Project Repository
## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- [Git](https://git-scm.com/)
- [Docker Desktop](https://www.docker.com/)


### Cloning the Repository
To clone the repository, run the following command:
```bash
git clone https://github.com/amanriyas/Team-76.git
cd Team-76
```

### Setting Up Environment Variables
Copy the example environment file to create your `.env` file:
```bash
cp .env.example .env
```

### Installing Dependencies
To download the necessary dependencies, run the following command to build the docker images:
```bash
docker compose build
```

### Running the Application
To start the application, run the following command:
```bash
docker compose up
```

This will start the application and make it accessible at `http://localhost:5173`.

### Stopping the Application
To stop the application, press `Ctrl+C` in the terminal where the application is running.

### Additional Commands
To stop and remove all containers, networks, and volumes created by `docker-compose up`, run:
```bash
docker compose down
```
### Please
Every time you make changes in the application, please re-run run:
```bash
docker compose build

docker compose up 
```
respectively in order to reflect the changes.