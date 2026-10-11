from fastapi import FastAPI
from response import api_responses

app = FastAPI(title = "simple ai provider")
@app.get("/")
async def read_root():
    return api_responses(200,"hello world",{"version":"1.0"})
