###################
# Import & config #
###################
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Need to specify the list of ports, else it wont work with only "*"
origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:5173",
    "http://10.244.1.53:5173",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

##########
# Exemple API route #
##########

@app.get("/add_two/{number}")
async def add_two(number: int):
    return {"result": number + 2}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)