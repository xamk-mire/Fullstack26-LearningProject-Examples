"""Exercise Tracker API — FastAPI app with CORS and routers."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import categories, exercises

app = FastAPI(title="Exercise Tracker API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(categories.router, prefix="/api")
app.include_router(exercises.router, prefix="/api")


@app.get("/")
def root():
    return {"message": "Exercise Tracker API is running"}
