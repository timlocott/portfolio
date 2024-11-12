from fastapi import APIRouter

exp_router = APIRouter(prefix="/experiences", tags=["Experiences"])

@exp_router.get("")
def get_exps():
    pass

@exp_router.get("/{exp_id}")
def get_exp():
    pass