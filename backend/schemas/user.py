# backend/schemas/user.py

from pydantic import BaseModel

class fromUser(BaseModel):
    query: str
    length: int

class toUser(BaseModel):
    id: int
    query: str
    length: int