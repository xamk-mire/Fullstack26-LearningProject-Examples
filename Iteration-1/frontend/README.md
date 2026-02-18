# Exercise Tracker — Frontend (Iteration 1 example solution)

Example solution for **Assignment Iteration 1** (Basic Frontend) of the Exercise/Workout Tracker project.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). You should see the Exercises list with mock data; use filters (date and category) and click an exercise to view its detail.

## Structure

- **Types** (`src/types/`) — Domain models and DTOs (integer ids).
- **Data** (`src/data/`) — Mock categories, exercises, exercise–category links, exercise fields.
- **Services** (`src/services/`) — `dataService` returns DTOs; replace with API calls in Iteration 2.
- **Layout** (`src/components/layout/`) — Header, Nav, Layout with `Outlet`.
- **Components** — CategoryBadge, ExerciseCard, ExerciseFieldList (consume DTOs).
- **Pages** — ExerciseListPage (filters), ExerciseDetailPage (not found handled).

## Routes

| Route            | Page                     |
| ---------------- | ------------------------ |
| `/`              | Redirect → `/exercises`  |
| `/exercises`     | Exercises list (filters) |
| `/exercises/:id` | Exercise detail          |
