# Next.js Frontend Application

## Overview

This project is a frontend application built using Next.js and integrated with Strapi CMS using GraphQL APIs.

The frontend dynamically fetches content from Strapi CMS and renders it across multiple pages. All page content, images, banners, gallery items, and text sections are manageable directly from the Strapi admin panel without changing frontend code.

---

# Tech Stack

## Frontend
- Next.js
- TypeScript
- Tailwind CSS
- GraphQL
- graphql-request

## Backend CMS
- Strapi CMS
- GraphQL Plugin

---

# Features

- Dynamic Homepage
- Dynamic Contact Page
- Dynamic Gallery Page
- Dynamic Hero Banners
- Dynamic Background Images
- Dynamic Paragraph Sections
- Dynamic Gallery Cards
- Contact Form Submission
- GraphQL API Integration
- CMS-driven content management
- Reusable Components
- Responsive Layout

---

# Project Structure

```bash
src/
│
├── app/
│   ├── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   └── layout.tsx
│
├── components/
│   └── Navbar.tsx
│
├── services/
│   ├── graphql.ts
│   └── queries.ts
│
└── styles/
```

---

# Routes

| Route | Description |
|---|---|
| `/` | Homepage |
| `/contact` | Contact Page |
| `/gallery` | Gallery Page |

---

# Prerequisites

Ensure the following are installed:

- Node.js v20 LTS
- npm
- Strapi backend application

---

# Environment Variables

Create a file named:

```bash
.env.local
```

Add the following:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Navigate to Project

```bash
cd frontend-app
```

---

## Install Dependencies

```bash
npm install
```

---

# Running the Project

## Start Development Server

```bash
npm run dev
```

Application runs on:

```text
http://localhost:3000
```

---

# Production Build

## Build Application

```bash
npm run build
```

## Start Production Server

```bash
npm run start
```

---

# GraphQL Integration

The frontend connects to the Strapi GraphQL endpoint:

```text
http://localhost:1337/graphql
```

---

# GraphQL Client Setup

File:

```bash
src/services/graphql.ts
```

Code:

```ts
import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`
);
```

---

# GraphQL Queries

File:

```bash
src/services/queries.ts
```

Contains:
- Homepage Query
- Contact Page Query
- Gallery Page Query

---

# Homepage

Homepage content is dynamically managed from Strapi CMS.

## Homepage Features

- Hero Banner
- Dynamic Background Image
- Dynamic Heading
- Dynamic Overlay Text
- Dynamic Paragraph Sections

## Homepage CMS Fields

| Field | Type |
|---|---|
| heading | Text |
| bannerText | Rich Text |
| bannerImage | Media |
| sections | Dynamic Zone |

---

# Contact Page

Contact page content is dynamically managed from Strapi CMS.

## Contact Page Features

- Hero Banner
- Dynamic Background Image
- Dynamic Text
- Contact Information
- Contact Form

## Contact CMS Fields

| Field | Type |
|---|---|
| heading | Text |
| bannerText | Rich Text |
| bannerImage | Media |
| email | Email |
| phone | Text |
| address | Rich Text |

---

# Contact Form Submission

The contact form submits data to Strapi backend using REST API.

Submitted data is stored inside:
- Contact Submission collection type

## Submitted Fields

| Field | Type |
|---|---|
| name | Text |
| email | Email |
| message | Rich Text |

---

# Gallery Page

Gallery page content is dynamically managed from Strapi CMS.

## Gallery Features

- Hero Banner
- Dynamic Gallery Cards
- Dynamic Images
- Dynamic Descriptions

## Gallery CMS Fields

| Field | Type |
|---|---|
| heading | Text |
| bannerText | Rich Text |
| bannerImage | Media |
| galleryItems | Repeatable Component |

---

# Dynamic Zones

Homepage paragraphs are managed using Strapi Dynamic Zones.

This allows:
- unlimited paragraph sections
- reorderable sections
- scalable content architecture

---

# Reusable Components

## Navbar

Shared navigation component used across all pages.

Location:

```bash
src/components/Navbar.tsx
```

---

# API Architecture

## Read Operations

GraphQL APIs are used for fetching CMS content.

## Write Operations

REST API is used for contact form submissions.

---

# Important Commands

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

## Create Production Build

```bash
npm run build
```

## Start Production Build

```bash
npm run start
```

---

# Backend Requirement

Ensure Strapi backend is running before starting frontend.

Backend URL:

```text
http://localhost:1337
```

GraphQL Endpoint:

```text
http://localhost:1337/graphql
```

---

# Common Issues

## GraphQL Data Not Loading

Ensure:
- Strapi server is running
- GraphQL plugin installed
- Public permissions enabled
- Content is published

---

## Images Not Displaying

Update:

```bash
next.config.ts
```

Example:

```ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
      },
    ],
  },
};

export default nextConfig;
```

Restart frontend server after updating.

---

## 403 Forbidden Error

Enable public permissions in Strapi:

```text
Settings
→ Users & Permissions
→ Roles
→ Public
```

Enable:
- find
- findOne
- create (for form submission)

---

# Future Improvements

- Form validation
- Toast notifications
- Loading states
- SEO optimization
- Authentication
- Deployment
- CMS-driven navigation
- Dynamic reusable sections
- Server-side caching

---

# Author

Developed using Next.js and Strapi CMS architecture.