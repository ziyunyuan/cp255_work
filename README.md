# 0414 Further Analysis

## File

- Further anlysis.ipynb: Further data manipulation using uber movement data, with visualization

- initial anlysis.ipynb: Data manipulation using uber movement data and OSMnx, try to have the database of road speed in different time.

- index.html: Very draft version of interactive website

- index.js: Javascript code using Mapbox GL

- kepler.gl: Visulization demo of weekday-PM

## Data

- Raw data: Uber movememnt October 2019

https://movement.uber.com/cities/san_francisco/downloads/speeds?lang=en-US&tp[y]=2019&tp[q]=4

Uber only reports speeds for OSM ways where 5 or more Uber vehicles have been detected within that particular period (eg on that day, in the hour), and provide information of mean speed and standard deviation.

- mean_speed_rd_Oct: the result dataframe generated from initial anlysis.ipynb

Colour scheme is classic RAG status and shows:

  - Grey: Missing data (either no Uber data or no reported speed limit)
  
  - Light Green: Smooth: Average Uber vehicle travelling above reported speed limit (eg beyongd 20 mph in a 20 zone)
  
  - Green: Normal: Average Uber vehicle travelling within reported speed limit (eg 16-20 mph in a 20 zone)
  
  - Yellow: Slow: Average Uber vehicle travelling above reported speed limit, but within speed limit + 50% (eg 12.5-16 mph in a 20 zone)
  
  - Red: Congested: Average Uber vehicle travelling above reported speed limit, but within speed limit + 75% (eg 10-12.5 mph in a 20 zone)
  
  - Dark Red: Heavy congested: Average Uber vehicle travelling above reported speed limit, but within speed limit + 100% (eg 0-10 mph in a 20 zone)
