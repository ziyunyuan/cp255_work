# 0310 Initial Analysis
file:
initial anlysis.ipynb: Data manipulation using uber movement data and OSMnx, try to have the database of road speed in different time.
index.html: Very draft version of interactive website
index.js: Javascript code using Mapbox GL
Data:
Database: Uber movememnt October 2019, select time from 7:00-23:00
Colour scheme is classic RAG status and shows:
  White: Missing data at that time
  Grey: No data available (either no Uber data or no reported speed limit)
  Light Green:Average Uber vehicle travelling above reported speed limit 25% (eg above 25 mph in a 20 zone)
  Green: Average Uber vehicle travelling within reported speed limit (eg 20-25 mph in a 20 zone)
  Yellow: Average Uber vehicle travelling above reported speed limit, but within speed limit + 25% (eg 16-20 mph in a 20 zone)
  Red: Average Uber vehicle travelling above reported speed limit, but within speed limit + 50% (eg 0-16 mph in a 20 zone)
