# React Vite Admin Dashboard

A modern, scalable admin dashboard built with **React 18**, **Vite 5**, **TypeScript**, and **Redux Toolkit**.  
This project demonstrates **production-style frontend architecture**, clean state management, and reusable UI patterns.

---

## ✨ Features

- Mock authentication with protected routes
- Users management (CRUD – mock API)
- Async data fetching with loading & error states
- Feature-based project structure
- Reusable UI components (Button, Card, Table)
- Responsive layout with Tailwind CSS
- Clean Git history with incremental commits

---

## 🧠 Architectural Decisions

### Why Vite?
- Faster dev server and build times than CRA
- Modern ecosystem alignment
- Preferred by many frontend teams today

### Why Redux Toolkit?
- Predictable global state management
- Simplifies reducers and async flows
- Easy to scale as application grows

### Why Feature-Based Structure?
- Improves scalability
- Encourages ownership per domain
- Reduces cross-feature coupling

### Why Mock APIs?
- Keeps frontend focused
- Demonstrates real async patterns (`createAsyncThunk`)
- Easy swap with real backend later

---

## 📁 Project Structure

```bash
src/
├── app/              # Store & routing
├── components/       # Reusable UI & shared components
├── features/         # Feature modules (auth, users, dashboard)
├── layouts/          # App layouts
├── services/         # API layer (mocked)
├── hooks/            # Custom hooks
├── types/            # Shared TypeScript types
└── utils/            # Utility functions
