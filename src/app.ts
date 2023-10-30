import config from "./config";
import getReadingsForStationId from "./adapters/get-readings-for-station-id";

const { stationIdToCheck } = config;
getReadingsForStationId({
  stationId: stationIdToCheck
}).then(console.log);