# backend/main.py
from fastapi import FastAPI, Depends
from typing import Optional
from pydantic import BaseModel

from backend.schemas.user import fromUser, toUser
from backend.database import Sessionlocal, engine, Base
from backend.models.user import User


from sqlalchemy.orm import Session


Base.metadata.create_all(bind=engine)

def get_db():
    db = Sessionlocal()
    try:
        yield db
    finally:
        db.close()  

app = FastAPI()

@app.get('/')
def root_page():
    return {'Hello, World!'}

@app.get('/contacts/{contact_id}')
def get_contacts(contact_id):
    return {contact_id}

@app.post('/add', response_model=toUser)
def add_user(fromuse: fromUser, db: Session = Depends(get_db)):
    user = User(query=fromuse.query, length=fromuse.length)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user