# Render Agency - Project Overview

## Project Description
**Render Agency** is a full-stack web application for a creative agency, featuring a client-facing website with portfolio showcase, services, and an admin dashboard for content management.

## Technology Stack

### Backend (NestJS)
- **Framework**: NestJS 11.x (Node.js framework)
- **Language**: TypeScript 5.x
- **Database**: PostgreSQL (via Docker)
- **ORM**: TypeORM
- **Authentication**: JWT + Passport
- **Cache**: Redis
- **API Prefix**: `/api`
- **Port**: 3000

### Frontend (Next.js)
- **Framework**: Next.js 15.2.1 with Turbopack
- **Language**: TypeScript 5.x
- **UI Library**: React 19
- **Styling**: SCSS Modules + TailwindCSS 4
- **State Management**: Zustand
- **Authentication**: next-auth + JWT cookies
- **Animations**: GSAP
- **UI Components**: Radix UI, Swiper, Fancyapps
- **Port**: 3001

### Infrastructure
- **Containerization**: Docker Compose
- **Database**: PostgreSQL latest
- **Cache**: Redis latest
- **Database Admin**: pgAdmin4

## Project Structure

```
render-agency/
├── backend/                    # NestJS Backend API
│   ├── src/
│   │   ├── main.ts            # Application entry point (port 3000)
│   │   ├── app.module.ts      # Root module
│   │   ├── auth/              # Authentication module (JWT, login, logout)
│   │   ├── user/              # User management module
│   │   ├── profile/           # User profile module
│   │   └── types/             # TypeScript type definitions
│   ├── test/                  # E2E and unit tests
│   ├── .env                   # Environment variables
│   └── package.json
│
├── frontend/                   # Next.js Frontend
│   ├── src/
│   │   ├── app/               # Next.js App Router
│   │   │   ├── layout.tsx     # Root layout
│   │   │   ├── client/        # Client-facing pages
│   │   │   └── admin_hftasd32cdv/ # Admin dashboard (obfuscated URL)
│   │   ├── components/        # Reusable React components
│   │   ├── assets/            # Styles (SCSS modules)
│   │   ├── hooks/             # Custom React hooks
│   │   ├── services/          # API service layer
│   │   ├── store/             # Zustand state management
│   │   ├── interfaces/        # TypeScript interfaces
│   │   ├── lib/               # Utility functions
│   │   └── middleware.ts      # Next.js middleware (auth protection)
│   ├── public/                # Static assets
│   └── package.json
│
├── docker-compose.yml          # Docker orchestration
├── .gitignore
└── .clinerules/               # Project documentation (AI assistant rules)
```

## Key Features

### Authentication & Authorization
- JWT-based authentication with HTTP-only cookies
- Role-based access control (admin, user)
- Protected routes on both frontend and backend
- Middleware-based route protection

### Client Portal
- Homepage with hero section
- Services showcase with tabs
- Portfolio/media grid
- Reviews/testimonials
- FAQ section
- Contact information

### Admin Dashboard
- Secure admin panel at `/admin_hftasd32cdv`
- User management
- Dashboard analytics

## Architecture Patterns

### Backend Architecture
- **Modular Design**: NestJS modules for separation of concerns
- **Dependency Injection**: Built-in NestJS DI container
- **Layered Architecture**: Controllers → Services → Repository (TypeORM)
- **Guards & Decorators**: Role-based access control
- **DTOs**: Data validation with class-validator

### Frontend Architecture
- **App Router**: Next.js 15 App Router for routing
- **Component-Based**: Reusable React components
- **Module CSS**: SCSS modules for component styling
- **API Layer**: Centralized API calls in services/
- **State Management**: Zustand for global state
- **Middleware**: Authentication and route protection
- **SSR**: Server-side rendering for better SEO

## Database Schema

### User Entity
```typescript
{
  id: number (Primary Key)
  email: string (Unique)
  password: string (Hashed with bcrypt)
  name: string
  role: enum ('user', 'admin')
  createdAt: Date
  updatedAt: Date
}
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login (returns JWT cookie)
- `POST /api/auth/logout` - User logout (clears cookie)

### User Management
- `POST /api/user/create` - Create new user (admin only)
- `POST /api/user/get` - Get user list

### Profile
- `GET /api/profile/get` - Get current user profile (protected)

## Environment Variables

### Backend (.env)
```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgrespassword
DB_NAME=render_agency

# JWT
JWT_SECRET=<64-char-hex-secret>

# Redis
REDIS_HOST=redis
REDIS_PORT=6379

# Environment
NODE_ENV=dev
```

### Frontend
- Uses backend API at `http://localhost:3000`
- CORS enabled for `http://localhost:3001`

## Security Features
- Password hashing with bcrypt
- JWT tokens stored in HTTP-only cookies
- CORS configuration
- Role-based access guards
- Protected routes with middleware
- Obfuscated admin URL

## Development Tools
- ESLint + Prettier for code formatting
- TypeScript for type safety
- Jest for testing
- Docker for containerization
- Hot reload enabled (watch mode)
