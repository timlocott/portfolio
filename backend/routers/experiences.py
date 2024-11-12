from fastapi import APIRouter

from backend.entities import (
    Experience,
    ExperienceCollection,
    ExperienceResponse
)

exp_router = APIRouter(prefix="/experiences", tags=["Experiences"])

@exp_router.get("", response_model=Experience)
def get_exps():
    return Experience(id= 0, title= "TestTitle", company= "TestCompany", dateRange= "2025-2026", skills= ["Skill1, Skill2, Skill3"], description= "TestDescription", link= "TestLink")

@exp_router.get("/{exp_id}")
def get_exp():
    pass