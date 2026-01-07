# Ticket Manager Backend

Backend API for user and ticket management system built with NestJS, Prisma, and PostgreSQL.

## Prerequisites

- Docker and Docker Compose
- Node.js (v18 or higher) - only if running without Docker
- PostgreSQL (v14 or higher) - only if running without Docker

## Quick Start

**Clone and run in one command:**

```bash
# 1. Clone the repository
git clone <repository-url>
cd ticket-manager

# 2. Copy environment file
cp .env.example .env

# 3. Start with Docker
docker-compose up
```

The API will be available at `http://localhost:3000`  
Swagger documentation at `http://localhost:3000/api`


## Running with Docker (Recommended)

### Database and API

```bash
docker-compose up
```

### Database Only (Run API locally)

```bash
# Start only PostgreSQL
docker-compose -f docker-compose.db.yml up -d

# Then run the API locally
npm install
npm run prisma:migrate
npm run prisma:generate
npm run start:dev
```

The API will be available at `http://localhost:3000`

### Production Mode

```bash
docker-compose -f docker-compose.prod.yml up --build
```

### Stop Containers

```bash
docker-compose down
```

### Stop and Remove Volumes

```bash
docker-compose down -v
```

## Running Without Docker

### Prerequisites

1. Install Node.js and PostgreSQL locally
2. Create a PostgreSQL database named `ticket_manager`

### Installation

```bash
npm i
```

### Database Setup

Configure the `.env` file with your database credentials:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ticket_manager?schema=public"
```

Run migrations and generate Prisma Client:

```bash
npm run prisma:migrate
npm run prisma:generate
```

### Start the Application

```bash
# development
npm run start:dev

# production
npm run start:prod
```

The API will be available at `http://localhost:3000`

## Docker Commands

```bash
# Full stack (DB + API)
docker-compose up

# Only database (run API locally)
docker-compose -f docker-compose.db.yml up -d

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f api

# Rebuild containers
docker-compose up --build

# Production mode
docker-compose -f docker-compose.prod.yml up --build
```

## API Endpoints

### Users

- `GET /users` - List all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user
- `PATCH /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Tickets

- `GET /tickets` - List all tickets
- `GET /tickets/:id` - Get ticket by ID
- `GET /tickets/user/:userId` - Get all tickets of a specific user
- `POST /tickets` - Create new ticket
- `PATCH /tickets/:id` - Update ticket
- `DELETE /tickets/:id` - Delete ticket