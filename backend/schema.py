from typing import Optional
from sqlmodel import Field, SQLModel

class ExperienceInDB(SQLModel, table=True):
    """DB model for experience."""

    __tablename__ = "experiences"

    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    company: str
    dateRange: str
    skills: list[str] = Field(default=None, sa_column=str)
    description: str
    link: Optional[str] = Field(default="")

    @property
    def tags_list(self) -> list[str]:
        return self.tags.split(",") if self.tags else []

    @tags_list.setter
    def tags_list(self, value: list[str]):
        self.tags = ",".join(value)

class ProjectInDB(SQLModel, table=True):
    """DB model for projects."""

    __tablename__ = "projects"

    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    dateRange: str
    skills: list[str] = Field(default=None, sa_column=str)
    link: Optional[str] = Field(default="")

    @property
    def tags_list(self) -> list[str]:
        return self.tags.split(",") if self.tags else []

    @tags_list.setter
    def tags_list(self, value: list[str]):
        self.tags = ",".join(value)
