
import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, render_template, jsonify
import os

# Use this to run via Flask. Uncomment this line if running Heroku
# engine = create_engine("postgresql://postgres:Sofija53!@localhost:5432/ca_homeprice_db")

# Use this for Heroku. Uncomment line 12 when using this code
engine = create_engine(os.environ.get('DATABASE_URL', ''))

# Instantiate a Flask app
app = Flask(__name__)


@app.route("/")
def welcome():
    return render_template('welcome.html')


@app.route("/predictprice")
def predictprice():

    session = Session(bind=engine)
    con = engine.connect()
    ca_homeprice = pd.read_sql("SELECT * FROM ca_homeprice", con)
     # Select a table with distinct county and house type for dropdown menu use
    countyItems = pd.read_sql("SELECT DISTINCT county FROM ca_homeprice ORDER BY county", con)
    housetypeItems = pd.read_sql("SELECT DISTINCT house_type FROM ca_homeprice ORDER BY house_type", con)

    ## Comment this out or delete to read in data from database session above
    # ca_homeprice = pd.read_csv('./static/data/sample_set.csv')

    data = ca_homeprice.to_json(orient='records')
    countyDrpdown = countyItems.county.to_list()
    housetypeDrpdown = housetypeItems.house_type.to_list()
    print(countyDrpdown)
    return render_template('predictprice.html', data=data, countyItems=countyDrpdown, housetypeItems=housetypeDrpdown)

@app.route("/visuals")
def visuals():
    return render_template('visuals.html')

@app.route("/team")
def team():
    return render_template('team.html')

@app.route("/documentation")
def documentation():
    return render_template('documentation.html')


# Run your app

if __name__ == "__main__":
    app.run()
