export interface LatestReading {
  "@id": string
  date: string
  dateTime: string
  measure: string
  value: number
}

export interface StationMeterReading {
  "@id": string
  label: string
  latestReading: LatestReading
  notation: string
  parameter: string
  parameterName: string
  period: number
  qualifier: string
  station: string
  stationReference: string
  unit: string
  unitName: string
  valueType: string
}

export interface EAStationMeasureResponseData {
  meta: {
    publisher: string
    licence: string
    documentation: string
    version: string
    comment: string
    hasFormat: string[]
  }
  items: StationMeterReading[]
}