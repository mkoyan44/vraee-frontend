# Setup and Installation Guide

## Prerequisites

### Required Software
- **Node.js**: Version 20.x or higher (NestJS 11 requirement)
  - Current system has v18.20.3 (may show warnings but should work)
  - Download from: https://nodejs.org/
- **npm**: Version 10.x or higher (comes with Node.js)
- **Docker Desktop**: Latest version
  - Required for PostgreSQL, Redis, and pgAdmin
  - Download from: https://www.docker.com/products/docker-desktop
- **Git**: For version control
- **IDE**: WebStorm, VS Code, or similar

### System Requirements
- **OS**: Windows 10/11, macOS, or Linux
- **RAM**: Minimum 8GB (16GB recommended)
- **Disk Space**: Minimum 2GB for dependencies

## Installation Steps

### 1. Clone the Repository
```bash
git clone <repository-url>
cd render-agency
```

### 2. Start Docker Services
Start PostgreSQL, Redis, and pgAdmin containers:

```bash
docker-compose up -d
```

Verify containers are running:
```bash
docker ps
```

You should see:
- `render-agency-postgres-1` - PostgreSQL database
- `render-agency-redis-1` - Redis cache
- `render-agency-pgadmin-1` - Database admin UI

### 3. Backend Setup

#### Install Dependencies
```bash
cd backend
npm install
```

**Note**: You may see warnings about unsupported Node.js version for NestJS 11. This is normal if you have Node v18.x. The application will still work.

#### Configure Environment Variables
The backend already has a `.env` file configured. Verify it contains:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgrespassword
DB_NAME=render_agency

# JWT Secret (64-character hex string)
JWT_SECRET=c718e821eca100b9eb27cb3318a352e14a96e5b71d19cb75f448b89966cecf5b21004f653a97981513d739813f9c707b34f396dc337f5d5efe03af39ae7b8ed9

# Redis Configuration
REDIS_HOST=redis
REDIS_PORT=6379

# Environment
NODE_ENV=dev
```

**Important**: 
- When running backend outside Docker, use `DB_HOST=localhost`
- When running backend inside Docker, use `DB_HOST=postgres`

### 4. Frontend Setup

#### Install Dependencies
```bash
cd frontend
npm install
```

#### Environment Configuration
The frontend doesn't require a separate `.env` file as it uses the backend API at `http://localhost:3000` by default (configured in `src/services/api.ts`).

### 5. Database Initialization
The database schema is automatically created when you first start the backend due to TypeORM's `synchronize: true` setting in `app.module.ts`.

**Caution**: In production, set `synchronize: false` and use migrations.

## Verification

### Check Docker Services
```bash
# View running containers
docker ps

# View container logs
docker logs render-agency-postgres-1
docker logs render-agency-redis-1
```

### Access pgAdmin
- URL: http://localhost:8080
- Email: admin@example.com
- Password: adminpassword

To connect to PostgreSQL in pgAdmin:
- Host: postgres (or localhost if accessing from host machine)
- Port: 5432
- Database: render_agency
- Username: postgres
- Password: postgrespassword

### Test Database Connection
You can test the connection by starting the backend (see next guide).

## Troubleshooting

### Port Conflicts
If ports 3000, 3001, 5432, 6379, or 8080 are in use:

**Solution 1**: Stop conflicting services
```bash
# Windows - Find process using port
netstat -ano | findstr :3000

# Kill process (replace PID)
taskkill /PID <PID> /F
```

**Solution 2**: Change ports in configuration files
- Backend: Change port in `backend/src/main.ts`
- Frontend: Next.js automatically tries 3001 if 3000 is taken
- Docker: Modify port mappings in `docker-compose.yml`

### Docker Issues

**Containers not starting:**
```bash
# Stop all containers
docker-compose down

# Remove volumes and restart
docker-compose down -v
docker-compose up -d
```

**Permission issues (Linux/Mac):**
```bash
sudo docker-compose up -d
```

### Node.js Version Warnings
If you see "EBADENGINE" warnings during `npm install`:
- The app will still work with Node v18.x
- To remove warnings, upgrade to Node v20.x or higher
- Use `nvm` (Node Version Manager) for easy switching

### Dependencies Installation Failures

**Network issues:**
```bash
# Clear npm cache
npm cache clean --force

# Reinstall
rm -rf node_modules package-lock.json
npm install
```

**Peer dependency warnings**: Usually safe to ignore in development.

### Database Connection Errors
If backend fails to connect to PostgreSQL:

1. Verify Docker container is running: `docker ps`
2. Check connection settings in `.env`
3. Ensure `DB_HOST=localhost` when running backend locally
4. Wait 10-20 seconds after starting Docker for PostgreSQL to initialize

## Next Steps
After successful installation, proceed to `03-running-the-project.md` to learn how to run the application.
