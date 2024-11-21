###################
# Import & config #
###################
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

##########
# Exemple API route #
##########

@app.get("/add_two/{number}")
async def add_two(number: int):
    return {"result": number + 2}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)