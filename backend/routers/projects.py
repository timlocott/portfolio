from fastapi import APIRouter

proj_router = APIRouter(prefix="/projects", tags=["Projects"])

@proj_router.get("")
def get_projs():
    return {
        "test": "testing more"
    }

@proj_router.get("/{proj_id}")
def get_proj():
    pass