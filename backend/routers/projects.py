from fastapi import APIRouter

proj_router = APIRouter(prefix="/projects", tags=["Projects"])

@proj_router.get("")
def get_proj():
    pass

@proj_router.get("/{proj_id}")
def get_proj():
    pass