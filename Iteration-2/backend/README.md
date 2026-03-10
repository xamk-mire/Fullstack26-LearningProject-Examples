# Exercise Tracker API (example backend)

Example FastAPI backend for [ASSIGNMENT_ITERATION_2.md](../docs/ASSIGNMENT_ITERATION_2.md). Layered architecture: routes → services → repositories (store).

**Structure:** `main.py`; `models/` (DTOs); `repositories/store.py` (in-memory data); `services/` (category_service, exercise_service); `routes/` (categories, exercises).

## Setup

```bash
cd backend
python -m venv venv
# Windows PowerShell:
.\venv\Scripts\Activate.ps1
# macOS/Linux:
# source venv/bin/activate

pip install -r requirements.txt
```

## Run

```bash
uvicorn main:app --reload
```

- API root: http://127.0.0.1:8000/
- Swagger UI: http://127.0.0.1:8000/docs
- Endpoints: `GET /api/categories`, `GET /api/categories/{id}`, `GET /api/exercises`, `GET /api/exercises/{id}`

Start the frontend from `frontend/` with `npm run dev` and set `VITE_API_BASE_URL=http://localhost:8000` in `frontend/.env` to use this backend.
