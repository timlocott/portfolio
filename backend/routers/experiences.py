from fastapi import APIRouter, Depends, Query
from sqlmodel import Session
from backend import database as db

from backend.entities import (
    Experience,
    ExperienceCollection,
    ExperienceResponse
)

exp_router = APIRouter(prefix="/experiences", tags=["Experiences"])

@exp_router.get("", response_model=ExperienceCollection)
def get_exps(session: Session = Depends(db.get_session)):
    """Get a collectoin of experiences."""
    exps = db.get_all_exps(session)
    sort_key = lambda exp: getattr(exp, "dateRange")
    return ExperienceCollection(
        meta={"count": len(exps)},
        experiences=sorted(exps, key=sort_key)
    )

@exp_router.get("/{exp_id}", response_model=ExperienceResponse)
def get_exp(exp_id: int, session: Session = Depends(db.get_session)):
    """Get an experience with the corresponding ID"""
    return db.get_exp_by_id(session, exp_id)