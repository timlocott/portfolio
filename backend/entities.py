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
    messages: list[Experience]

class ExperienceResponse(BaseModel):
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
    messages: list[Project]

class ProjectResponse(BaseModel):
    project: Project


