from typing import Optional
from sqlmodel import Field, SQLModel

class ExperienceInDB(SQLModel, table=True):
    """DB model for experience."""

    __tablename__ = "experiences"

    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    company: str
    dateRange: str
    skills: list[str]
    description: str
    link: Optional[str] = Field(default=None)

class ProjectInDB(SQLModel, table=True):
    """DB model for projects."""

    __tablename__ = "projects"

    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    dateRange: str
    skills: list[str]
    link: Optional[str] = Field(default=None)