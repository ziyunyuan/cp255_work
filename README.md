# Congestion map in San Francisco

## File
- Final wrap.ipynb: The final wrap of all data manipulation

- Further anlysis.ipynb: Further data manipulation using uber movement data, with visualization

- initial anlysis.ipynb: Data manipulation using uber movement data and OSMnx, try to have the database of road speed in different time.



## Data

- Raw data: Uber movememnt October 2019

  - https://movement.uber.com/cities/san_francisco/downloads/speeds?lang=en-US&tp[y]=2019&tp[q]=4

  - Uber only reports speeds for OSM ways where 5 or more Uber vehicles have been detected within that particular period (eg on that day, in the hour), and provide information of mean speed and standard deviation.

- mean_speed_rd_Oct: the result dataframe generated from initial anlysis.ipynb

- Bike lane data
  - SFMTA Bikeway Network
  
- TAZ(Traffic analysis zone)
  - MTC Open Data Layer Library
  - http://opendata.mtc.ca.gov/datasets/transportation-analysis-zones?geometry=-122.750%2C37.705%2C-122.097%2C37.800&orderBy=county&orderByAsc=false


## Congestion index:
  - Congestion index = Road mean speed data/ Road max speed

  - Missing data (either no Uber data or no reported speed limit)
  
  - Smooth: Average Uber vehicle travelling above reported speed limit (eg beyongd 20 mph in a 20 zone) 
    - congestion index>1
  
  - Normal: Average Uber vehicle travelling within reported speed limit (eg 16-20 mph in a 20 zone) 
    - 0.8<congestion index<1
  
  - Slow: Average Uber vehicle travelling below reported speed limit, but within speed limit + 50% (eg 12.5-16 mph in a 20 zone)
    - 0.64<congestion index<0.8
  
  - Congested: Average Uber vehicle travelling below reported speed limit, but within speed limit + 75% (eg 10-12.5 mph in a 20 zone)
    - 0.51<congestion index<0.64
  
  - Heavy congested: Average Uber vehicle travelling below reported speed limit, but within speed limit + 100% (eg 0-10 mph in a 20 zone)
    - congestion index<0.51

## Visualization
- Link to Demo: https://kepler.gl/demo/map/carto?mapId=14926035-fcfd-b1a4-6455-45647bc4baf1&owner=ziyunyuan&privateMap=false
