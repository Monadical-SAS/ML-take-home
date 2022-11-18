import time

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models.response import ResponseModel


app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["Root"])
async def read_root():
    return {"message": f"Welcome to the image classifier server!! , servertime {time.time()}"}

@app.get("/classify", tags=["Image Classification"])
async def classify():
    # Write your code here
    
    # Response mockup
    # You can delete this and adapt it to your needs.
    fakeresponse = {
        "message": "",
        "success": True,
        "data": {"label":"some label", "score": 0.89456}
    }

    return ResponseModel(**fakeresponse)
    