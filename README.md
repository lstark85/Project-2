# Project-2

***Weather & Accidents Analysis: California in 2019***

**Main Question:** What is the relationship between the weather events/conditions and California traffic events? Does the severity of a weather event increase the severity of the traffic event? Does a more severe weather event cause an increase in traffic events compared to less severe weather?

**Summary**: This project used a python flask-powered API combined with PostgreSQL, to create various visualizations (using HTML, CSS, JavaScript, d3.js, and Chart.js) surrounding the topic of weather patterns & traffic accidents that occur in California in 2019. The main data was pulled from Kaggle, and was cleaned & filtered in a Jupyter Notebook to load the files into a SQL database. The database is then called every time the flask app runs in a browser, where multiple visualizations are available to see. 

*Datasets Used:* 
- [US Weather Events](https://www.kaggle.com/sobhanmoosavi/us-weather-events)
- [U.S. Accidents](https://www.kaggle.com/sobhanmoosavi/us-accidents)

**data**: this folder contains the filtered and cleaned data
- ca_accidents.csv
- ca_weather.csv

**project_data_copy.ipynb**: 
- Jupyter Notebook with the ETL (Extracting, Transforming, & Loading) Process

**resources**: this folder contains the SQL schemas used to initialize the SQL database

**flask_app**: this folder contains the main flask app used to run the visualizations & call the API data on your local machine
- ***static***: *css*, *js*: (all js files are contained in here for each visualization)
- ***templates***: all templates (html files) are contained in here for each visualization
- ***HOW TO RUN***: Navigate to this folder and run: "python app.py" in your local terminal


*Acknowledgements for Datasets:*
- Moosavi, Sobhan, Mohammad Hossein Samavatian, Arnab Nandi, Srinivasan Parthasarathy, and Rajiv Ramnath. “Short and Long-term Pattern Discovery Over Large-Scale Geo-Spatiotemporal Data.” In Proceedings of the 25th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining, ACM, 2019.
- Moosavi, Sobhan, Mohammad Hossein Samavatian, Srinivasan Parthasarathy, and Rajiv Ramnath. “A Countrywide Traffic Accident Dataset.”, 2019.
- Moosavi, Sobhan, Mohammad Hossein Samavatian, Srinivasan Parthasarathy, Radu Teodorescu, and Rajiv Ramnath. "Accident Risk Prediction based on Heterogeneous Sparse Data: New Dataset and Insights." In proceedings of the 27th ACM SIGSPATIAL International Conference on Advances in Geographic Information Systems, ACM, 2019.



