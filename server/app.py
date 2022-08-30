from fastapi import FastAPI, Request
from sqlalchemy import create_engine, Table, Column, Integer, String
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import declarative_base, Session


engine = create_engine("postgresql+psycopg2://postgres:inco@0.0.0.0/postgres:5432/postgres", echo = True)
base = declarative_base()
app = FastAPI()


class Contacts(base):
    __tablename__ = "contacts"
    id = Column(Integer, primary_key=True)
    name = Column(String(30))
    lastname = Column(String)
    contact = Column(Integer)
    def __init__(self, name, lastname, contact):
        self.name = name
        self.contact = contact
        self.lastname = lastname

base.metadata.create_all(engine)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello this is contact API"}

@app.post("/contact")
async def add_contact(contact: Request):
    try:
        contact = await contact.json()
        
        with Session(engine) as session:
            contact = Contacts(contact['name'], contact['lastname'], contact['contact'])
            session.add(contact)
            session.commit()
        return {"message": f"{contact['name']} contact added"}
    except Exception as e:
        return {"message": f"[Failed] {str(e)}"}

@app.get("/contact")
async def get_contact(page: int = 0):
    try:
        with Session(engine) as session:
            contacts = session.query(Contacts).limit(20)
            more = len(contacts.offset(page * 20 + 1).all())
            contacts = contacts.offset(page).all()
        return {"data": [{"name":c.name, "contact": c.contact, "lastname": c.lastname} for c in contacts], "more":more}
    except Exception as e:
        return {"message": f"[Failed] {str(e)}"}


if __name__ == "__main__":
    app.run()
