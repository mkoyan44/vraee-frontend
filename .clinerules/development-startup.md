## Brief overview
Project-specific rules for development startup workflow, focusing on clean port management and process management before starting application services.

## Development workflow
- Kill existing processes on development ports before starting servers
- Always ensure ports 3000 (backend) and 3001 (frontend) are free before project startup
- Clean machine state for each development session to prevent port conflicts
- Execute process termination commands systematically before starting new app instances

## Port management
- Backend application port: 3000
- Frontend application port: 3001
- Docker services: 5432 (PostgreSQL), 6379 (Redis), 8080 (pgAdmin)

## Startup process
- Stop Docker containers completely before restarting services
- Terminate all Node.js processes running on development ports
- Clear any lingering background processes that might hold ports
- Ensure clean filesystem state for application startup
