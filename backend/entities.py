from pydantic import BaseModel
from sqlmodel import Field, SQLModel

class Metadata(BaseModel):
    """Represents metadata for a collection."""
    count: int

class Experience(SQLModel):
    """Data model for experience."""
    id: int
    title: str
    company: str
    dateRange: str
    skills: list[str]
    description: str
    link: str

class ExperienceCollection(BaseModel):
    """Represents an API response for a collection of experiences."""
    meta: Metadata
    experiences: list[Experience]

class ExperienceResponse(BaseModel):
    """Represents an expereince response"""
    experience: Experience

class Project(SQLModel):
    """Data model for project."""
    id: int
    title: str
    dateRange: str
    skills: list[str]
    link: str

class ProjectCollection(BaseModel):
    """Represents an API response for a collection of projects."""
    meta: Metadata
    projects: list[Project]

class ProjectResponse(BaseModel):
    """Represents a project response."""
    project: Project


