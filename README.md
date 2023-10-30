# KaarbonTech Technical Test Scott Allen

## Setup
    npm install

## Test
Tests can be ran against the functions created using

    npm run test

## Getting Sensor Data
Please update config.ts with the sensorId you wish to retrieve data from. (src/config.ts)

Then simply run the app, output will be printed to console.

    npm run start

## Solutions
### 1. Write a function which, given an array of words, returns an array containing the length of each word.
simple map function

    src/words-to-word-lengths.ts

### 2. Write a function which, given an array of numbers, returns the sum of all the numbers.
simple reduce function

    src/sum-of-numbers.ts

### 3. Write a function which, given an EA sensor station ID, fetches readings (measures) from that sensor station.
node-fetch adapter with error handling

    src/adapters/get-readings-for-station-id.ts
