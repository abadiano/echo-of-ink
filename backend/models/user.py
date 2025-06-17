# backend/models/user.py
from sqlalchemy import Integer, String, Column
from backend.database import Base

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    query = Column(String, unique=True, index=True)
    length = Column(Integer, unique=True, index=True)