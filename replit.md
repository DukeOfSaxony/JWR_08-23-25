# Brooklyn Timepiece & Jewelry Repair Website

## Overview

This is a full-stack web application for Brooklyn Timepiece & Jewelry Repair (formerly Michael's Shoe Repair), a business offering watch repair, jewelry repair, and related services in Carroll Gardens, Brooklyn. The site features a modern, responsive design with service listings, pricing information, a photo gallery, customer testimonials, and a contact form with email integration.

The application is built as a single-page application (SPA) with React on the frontend and Express on the backend, using Vite for development and build tooling. It's designed to be deployed on platforms like Vercel or Netlify.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- **React 18** with TypeScript for the UI layer
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight React Router alternative)
- **TanStack Query** for server state management and data fetching

**UI Component Library**
- **shadcn/ui** component system built on Radix UI primitives
- **Tailwind CSS v4** for styling with the "New York" preset
- Custom design system with IBM Plex Sans and Inter fonts
- Responsive design with mobile-first approach

**State Management**
- React hooks for local component state
- TanStack Query for server state and caching
- Toast notifications for user feedback

**Project Structure**
- `client/src/pages/` - Route-level components (Home, Privacy, Terms, Debug)
- `client/src/components/` - Reusable UI components organized by feature
- `client/src/components/ui/` - shadcn/ui base components
- `client/src/hooks/` - Custom React hooks including animation observers
- `client/src/lib/` - Utility functions and query client configuration

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js
- TypeScript for type safety
- ESM module system (not CommonJS)

**Development vs Production**
- In development: Vite dev server integrated with Express middleware
- In production: Express serves pre-built static assets from `dist/public`
- Custom logging middleware for API request tracking

**API Endpoints**
- Serverless functions in `/api` directory for Vercel deployment
- `/api/health` - Health check endpoint
- `/api/send` - Contact form email submission
- `/api/debug` - Diagnostic information (development only)
- `/api/test-sendgrid` - SendGrid configuration test

**Request Flow**
1. Express middleware processes all requests
2. API routes handle `/api/*` paths
3. Static files served from build output
4. SPA fallback for client-side routing

### Data Storage

**Database**
- **PostgreSQL** as the primary database
- **Drizzle ORM** for database schema and migrations
- **Neon Serverless** driver for PostgreSQL connections
- Schema defined in `shared/schema.ts` (currently has user table for potential auth)

**In-Memory Storage**
- `MemStorage` class provides in-memory data persistence for development
- Implements user CRUD operations
- Can be swapped with database implementation

**Note**: The current implementation has database infrastructure in place but the contact form doesn't persist data - it only sends emails.

### External Dependencies

**Email Service**
- **SendGrid** for transactional email delivery
- Configured via `SENDGRID_API_KEY` environment variable
- Email utility wrapper in `server/utils/email.ts`
- Contact form submissions sent to `jdavydov@gmail.com`
- Uses verified sender `website@michaelsshoecraft.com`

**Deployment Platforms**
- **Vercel** - Primary deployment target with serverless functions
- **Netlify** - Alternative deployment option with form handling support
- Both require environment variable configuration for SendGrid

**Third-Party Services**
- Google Fonts for typography (IBM Plex Sans, Inter, Archivo, Oswald)
- Unsplash for placeholder images in some components

**Build & Development Tools**
- **tsx** for running TypeScript in development
- **esbuild** for production server bundling
- **drizzle-kit** for database migrations
- **Replit** plugins for development environment integration

**Environment Variables Required**
- `DATABASE_URL` - PostgreSQL connection string (Neon or other provider)
- `SENDGRID_API_KEY` - SendGrid API key for email functionality
- `NODE_ENV` - Environment mode (development/production)
- `VERCEL_*` - Automatically set by Vercel platform

**CORS & API Configuration**
- CORS enabled for all API routes to support cross-origin requests
- Handles preflight OPTIONS requests
- Configured for both development and production environments

**Form Submission Strategy**
- Netlify: Uses native Netlify Forms with hidden form detection
- Vercel: Uses SendGrid API via serverless function
- Dual implementation for deployment flexibility