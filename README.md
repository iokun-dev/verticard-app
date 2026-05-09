# Verticard App

## Overview

This project is a frontend application built using Next.js and integrated with Strapi CMS using GraphQL APIs.

The frontend dynamically fetches content from Strapi CMS and renders it across multiple pages. All page content, images, banners, gallery items, and text sections are manageable directly from the Strapi admin panel without changing frontend code.

---

# Tech Stack

## Frontend
- Next.js
- TypeScript
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
- Responsive Layout

---

# Test Cases Covered

- Homepage loads successfully
- Gallery page loads successfully
- Contact page loads successfully
- Navigation between pages works
- CMS content renders correctly
- Images load correctly
- Contact form submission works
- GraphQL APIs return data successfully

# Basic Project Structure

```bash
public/
│
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
├── services/
│   ├── graphql.ts
│   └── queries.ts

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

- Node.js v24.15.0 LTS
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
NEXT_PUBLIC_API_URL=http://localhost:1337
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
cd verticard-app
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

# Homepage

Homepage content is dynamically managed from Strapi CMS.

## Homepage Features

- Dynamic Hero Image
- Dynamic Heading
- Dynamic Paragraph Sections

# Contact Page

Contact page content is dynamically managed from Strapi CMS.

## Contact Page Features

- Dynamic Header
- Hero Banner
- Contact Information
- Contact Form

# Contact Form Submission

The contact form submits data to Strapi backend using REST API.

Submitted data is stored inside:
- Contact Submission collection type

---

# Gallery Page

Gallery page content is dynamically managed from Strapi CMS.

## Gallery Features

- Dynamic Header
- Dynamic Text
- Dynamic Gallery Cards
- Dynamic Images
- Dynamic Descriptions

# Dynamic Zones

Homepage paragraphs are managed using Strapi Dynamic Zones.

This allows:
- unlimited paragraph sections
- reorderable sections
- scalable content architecture

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

# Future Improvements

- Form validation
- Toast notifications
- Loading states
- SEO optimization
- Authentication
- CMS-driven navigation
- Dynamic reusable sections
- Server-side caching

---

# Author

Developed using Next.js and Strapi CMS architecture.