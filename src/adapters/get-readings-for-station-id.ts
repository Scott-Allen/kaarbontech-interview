import defaultFetch from 'node-fetch';
import { EAStationMeasureResponseData } from '../types/ea-meter-readings';
import config from '../config';
/**
 * 3. Finally, a slightly more in-depth one, but one which still shouldn't take very long:
 * The UK's Environment Agency has a public access API to fetch rainfall data from its network of around 1,000 sensors.
 * Write a function which, given an EA sensor station ID, fetches readings (measures) from that sensor station.
 * The documentation for the EA's API should make this easy enough: https://environment.data.gov.uk/flood-monitoring/doc/rainfall
 * You may use whatever HTTP client you would like. For this task, your code should be able to run under NodeJS (or ts-node​ for Typescript).
 */
const {
  eaFloodMonitoringApiRoot
} = config;

const getReadingsForStationId = async ({
  stationId,
  fetch = defaultFetch,
}: {
  stationId: string,
  fetch?: typeof defaultFetch
}) => {

  try{
    const response = await fetch(`${eaFloodMonitoringApiRoot}/id/stations/${stationId}/measures`);
    if (!response.ok){
      throw new Error(`Unexpected response code ${response.status}`);
    }
    const {items, meta} = await response.json() as EAStationMeasureResponseData;
    console.debug(meta);
    return items;
  } catch (err) {
    const errMessage = err.message;
    console.error(`Failed to get readings for station ${stationId}: ${errMessage}`);
    throw err;
  }
};

export default getReadingsForStationId;