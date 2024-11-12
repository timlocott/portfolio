from fastapi import FastAPI

app = FastAPI(
    title="Pony Express API",
    description="Chat application",
    version="0.1.0",
)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", reload=True)