from fastapi import APIRouter

skillshobbies_router = APIRouter(prefix="/skillshobbies", tags=["SkillsHobbies"])

@skillshobbies_router.get("")
def get_skillshobbies():
    pass