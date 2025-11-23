# Running the Project

## Quick Start

### 1. Ensure Docker Services Are Running
```bash
docker-compose up -d
```

### 2. Start Backend (Terminal 1)
```bash
cd backend
npm run start:dev
```

The backend will start on **http://localhost:3000** with hot reload enabled.

**Output**: You should see:
- `Starting compilation in watch mode...`
- `Nest application successfully started`
- Database connection and table creation logs
- API routes mapped (e.g., `/api/auth/login`, `/api/user/create`)

### 3. Start Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```

The frontend will start on **http://localhost:3001** (or next available port).

**Output**: You should see:
- `Next.js 15.2.1 (Turbopack)`
- `Local: http://localhost:3001`
- `Ready in 2.3s`

### 4. Access the Application
- **Client Website**: http://localhost:3001
- **Admin Dashboard**: http://localhost:3001/admin_hftasd32cdv
- **API Endpoints**: http://localhost:3000/api
- **pgAdmin**: http://localhost:8080

## Available npm Scripts

### Backend Scripts
Located in `backend/package.json`:

```bash
# Development
npm run start:dev      # Start with watch mode (hot reload)
npm run start          # Start without watch mode
npm run start:debug    # Start in debug mode

# Production
npm run build          # Build the project
npm run start:prod     # Run production build

# Testing
npm run test           # Run unit tests
npm run test:watch     # Run tests in watch mode
npm run test:e2e       # Run end-to-end tests
npm run test:cov       # Run tests with coverage

# Code Quality
npm run lint           # Lint and fix code
npm run format         # Format code with Prettier
```

### Frontend Scripts
Located in `frontend/package.json`:

```bash
# Development
npm run dev            # Start dev server with Turbopack

# Production
npm run build          # Build for production
npm run start          # Start production server

# Code Quality
npm run lint           # Lint code with ESLint
```

## Development Workflow

### Standard Development Process

1. **Start Docker services** (if not running)
   ```bash
   docker-compose up -d
   ```

2. **Run backend in watch mode** (Terminal 1)
   ```bash
   cd backend
   npm run start:dev
   ```

3. **Run frontend in dev mode** (Terminal 2)
   ```bash
   cd frontend
   npm run dev
   ```

4. **Make changes to code**
   - Backend changes trigger automatic recompilation
   - Frontend changes trigger hot reload

5. **View changes in browser**
   - Navigate to http://localhost:3001
   - Changes appear automatically

### Testing API Endpoints

#### Using curl (Command Line)

**Login Example:**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password123"}'
```

**Get Profile (Protected Route):**
```bash
curl -X GET http://localhost:3000/api/profile/get \
  -H "Cookie: token=YOUR_JWT_TOKEN"
```

#### Using Browser DevTools
1. Open Network tab in DevTools
2. Navigate to login page
3. Submit login form
4. Inspect request/response in Network tab

#### Using Postman or Insomnia
- Import API endpoints from documentation
- Configure base URL: `http://localhost:3000`
- Set Content-Type: `application/json`
- For protected routes, include cookie or token

## Database Management

### Using pgAdmin
1. Access pgAdmin at **http://localhost:8080**
2. Login:
   - Email: `admin@example.com`
   - Password: `adminpassword`

3. Add server connection:
   - Host: `postgres` (or `localhost`)
   - Port: `5432`
   - Database: `render_agency`
   - Username: `postgres`
   - Password: `postgrespassword`

4. Browse tables:
   - Navigate to: Servers → render_agency → Schemas → public → Tables
   - View `user` table structure and data

### Using Command Line
```bash
# Connect to PostgreSQL container
docker exec -it render-agency-postgres-1 psql -U postgres -d render_agency

# Common queries
\dt                    # List all tables
SELECT * FROM "user";  # View all users
\d "user"              # Describe user table
\q                     # Quit
```

## Monitoring and Logs

### View Backend Logs
If running in terminal, logs appear automatically.

For containerized backend:
```bash
docker logs -f render-agency-backend-1
```

### View Frontend Logs
Logs appear in the terminal where `npm run dev` is running.

### View Database Logs
```bash
docker logs -f render-agency-postgres-1
```

### View Redis Logs
```bash
docker logs -f render-agency-redis-1
```

## Stopping the Application

### Stop Development Servers
- Press `Ctrl+C` in each terminal running the servers

### Stop Docker Services
```bash
# Stop containers (keeps data)
docker-compose down

# Stop and remove volumes (deletes data)
docker-compose down -v
```

## Common Development Tasks

### Creating a New User (For Testing)
Use the backend API or direct database insertion:

**Via API:**
```bash
curl -X POST http://localhost:3000/api/user/create \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "name": "Test User",
    "role": "user"
  }'
```

**Via Database:**
```sql
-- Password: "password123" (bcrypt hashed)
INSERT INTO "user" (email, password, name, role, "createdAt", "updatedAt")
VALUES (
  'test@example.com',
  -- Use backend to hash password properly
  'Test User',
  'user',
  NOW(),
  NOW()
);
```

### Clearing Database
```bash
# Remove all data and restart
docker-compose down -v
docker-compose up -d

# Wait for PostgreSQL to initialize
# Then restart backend to recreate schema
cd backend
npm run start:dev
```

### Rebuilding After Dependencies Change
```bash
# Backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install
```

## Performance Tips

### Development Mode Optimizations
- **Turbopack**: Frontend uses Turbopack for faster builds
- **Watch Mode**: Backend auto-recompiles on changes
- **Hot Reload**: Frontend hot-reloads without full page refresh

### Memory Management
If experiencing slow performance:
```bash
# Clear Next.js cache
cd frontend
rm -rf .next

# Clear node cache
npm cache clean --force
```

## Troubleshooting

### Backend Won't Start
1. Check Docker services: `docker ps`
2. Verify `.env` file exists with correct values
3. Check port 3000 isn't in use
4. Review error logs in terminal

### Frontend Won't Start
1. Check backend is running on port 3000
2. Verify `node_modules` installed: `npm install`
3. Clear cache: `rm -rf .next`
4. Check port 3001 isn't in use

### Database Connection Issues
1. Ensure PostgreSQL container is running
2. Wait 10-20 seconds after starting Docker
3. Verify `DB_HOST=localhost` in `.env`
4. Test connection with pgAdmin

### CORS Errors
1. Backend CORS is configured for `http://localhost:3001`
2. If frontend runs on different port, update `main.ts`
3. Ensure cookies are enabled in browser

### Hot Reload Not Working
1. **Backend**: Check terminal for compilation errors
2. **Frontend**: Refresh browser manually
3. Restart dev servers

## Next Steps
After successfully running the project, see:
- `04-backend-architecture.md` - Backend structure details
- `05-frontend-architecture.md` - Frontend structure details
- `06-development-guidelines.md` - Coding standards and best practices
