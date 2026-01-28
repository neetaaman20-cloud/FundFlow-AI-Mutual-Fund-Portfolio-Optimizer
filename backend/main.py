from fastapi import FastAPI
from optimizer import get_optimized_allocation
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allows your React app to communicate with this Python server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/calculate")
def calculate(risk: int):
    result = get_optimized_allocation(risk)
    return result