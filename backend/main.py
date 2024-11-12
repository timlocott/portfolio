from fastapi import FastAPI

from backend.routers.experiences import exp_router
from backend.routers.projects import proj_router

app = FastAPI(
    title="Pony Express API",
    description="Chat application",
    version="0.1.0",
)

app.include_router(exp_router)
app.include_router(proj_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", reload=True)