import os
from sqlmodel import Session, SQLModel, create_engine, select

from backend.entities import(
    Experience,
    ExperienceCollection,
    ExperienceResponse,
    Project,
    ProjectCollection,
    ProjectResponse
)

from backend.schema import(
    ExperienceInDB,
    ProjectInDB
)

if os.environ.get("B_LOCATION") == "RDS":
    endpoint = os.environ.get("PG_ENDPOINT")
    port = os.environ.get("PG_PORT")
    db_url = f'postgresql://@{endpoint}:{port}/'
    echo = False
    connect_args = {}
else:
    db_url = "sqlite:///backend/portfolio.db"
    echo = True
    connect_args = {"check_same_thread": False}

engine = create_engine(
    db_url,
    echo=echo,
    connect_args=connect_args,
)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session

# ------------------------------------ Experiences ------------------------------------ #

def get_all_exps(session: Session) -> list[ExperienceInDB]:
    """
    Get all experiences from the database
    :return: list of experiences
    """
    return session.exec(select(ExperienceInDB)).all()

def get_exp_by_id(session: Session, exp_id) -> ExperienceResponse:
    """
    Get experience from database
    :param session: session
    :param exp_id: id of the experience
    return: the experience
    :raises: EntityNotFoundException: If experience id does not exist
    """

    exp = session.get(ExperienceInDB, exp_id)
    if exp:
        return ExperienceResponse(experience=exp)
    raise EntityNotFoundException(entity_name="Experience", entity_id=exp_id)

# ------------------------------------ Projects ------------------------------------ #

def get_all_projs(session: Session) -> list[ProjectInDB]:
    """
    Get all projects from the database
    :return: list of projects
    """
    return session.exec(select(ProjectInDB)).all()

def get_proj_by_id(session: Session, proj_id) -> ProjResponse:
    """
    Get project from database
    :param session: session
    :param proj_id: id of the project
    return: the project
    :raises: EntityNotFoundException: If project id does not exist
    """

    proj = session.get(ProjectInDB, proj_id)
    if proj:
        return ProjectResponse(project=proj)
    raise EntityNotFoundException(entity_name="Project", entity_id=proj_id)

# ------------------------------------ exception classes ------------------------------------ #

class EntityNotFoundException(Exception):
    def __init__ (self, *, entity_id: int, entity_name: str):
        self.entity_name = entity_name
        self.entity_id = entity_id

class DuplicateEntityException(Exception):
    def __init__ (self, *, entity_id: int, entity_name: str):
        self.entity_name = entity_name
        self.entity_id = entity_id