from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {'Main page'}

@app.get("/about")
def about():
    return {'About page'}

