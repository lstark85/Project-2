# Import flask dependencies
from flask import Flask, jsonify, render_template

# Import sqlalchemy & other dependencies
import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy import create_engine, func
from config import db_user, db_password, db_host, db_name, db_port

# Build engine
engine = create_engine(f'postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}')

# Setup Flask
app = Flask(__name__)

# Home Page
@app.route("/")
def index():
    # return ( 
        # f"Available Routes:<br/>"
        # f"/api/v1.0/weather<br/>"
        # f"/api/v1.0/accidents")

    return(render_template("flask_index.html"))

# Weather route
@app.route("/weather")
def weather():
    
    # Read in weather table
    results = pd.read_sql('SELECT * FROM weather', engine)

    # Convert results to json
    results_json = results.to_json(orient='records') 

    return results_json

# Accidents route
@app.route('/accidents')
def accidents():

    # Read in accidents table
    results = pd.read_sql('SELECT * FROM accidents', engine)

    # Convert results to json
    results_json = results.to_json(orient='records') 

    return results_json

@app.route('/accidents/sacramento')
def accidents_smaller():

    # Read in accidents table
    results = pd.read_sql("SELECT * FROM accidents WHERE accidents.city = 'Sacramento'", engine)

    # Convert results to json
    results_json = results[['city', 'lat', 'lng', 'severity']].to_json(orient='records') 

    return results_json

# Jason's Map
@app.route('/map')
def map():
    return render_template("map_index.html")

# Linda's Radar
@app.route('/radar')
def radar():
    return render_template("radar.html")

# Vasu's Line Graph
@app.route('/line-graph')
def lineGraph():
    return render_template("lineGraph.html")

# Julia's Heatmap
@app.route('/heatmap')
def heatmap():
    return render_template("heatmap.html")

# Run app
if __name__ == '__main__':
    app.run(debug=True)