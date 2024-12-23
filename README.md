# Blogging Platform Frontend

This is the frontend for the Blogging Platform, built with **Next.js** using the App Router for improved routing capabilities. The application provides user interface for users to create, read, and interact with blog posts.

## Features

- **Next.js App Router**: Efficient and streamlined routing using Next.js App Router.
- **Authentication**: Integrated with backend APIs to handle user login and registration.
- **Dynamic Routing**: Supports dynamic routes for blog posts.
- **API Integration**: Fetches data from the backend services.

## Prerequisites

- Node.js (version 20 or higher)
- npm or yarn package manager

## Getting Started

### Clone the Repository

```bash
git clone git@github.com:yahialabeeb/blogging-platform-front.git
cd blogging-platform-front

```

### Install Dependencies

Run the following command to install required dependencies:

```bash
npm install
```

or if you prefer Yarn:

```bash
yarn install
```

### Configure Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000
```

- `NEXT_PUBLIC_BACKEND_URL`: URL of the backend API.
- `NEXTAUTH_SECRET`: Secret key for NextAuth authentication.
- `NEXTAUTH_URL`: Base URL of the frontend application.

### Run the Application

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

To build the application for production:

```bash
npm run build
```

Serve the production build:

```bash
npm run start
```

## Notes

- This project uses **NextAuth** for authentication.
