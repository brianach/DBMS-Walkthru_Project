import os
from flask import Flask
from flask_sqlalchemy import flask_sqlalchemy
if os.path.exists("env.py"):
    import env


app = Flask(__name__)
app.config["SECRET_KEY"] = os.envirn.get("SECREY_KEY")
app.config["SQL_ALCHEMY_DATABASE_URI"] = os.environ.get("DB_URL")

db = SQLALCHEMY(app)

from taskmanager import routes # noqa