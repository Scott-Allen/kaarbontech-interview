import { StationMeterReading } from "../../src/types/ea-meter-readings";
import type { Response } from "node-fetch";
import getReadingsForStationId from "../../src/adapters/get-readings-for-station-id";
import config from "../../src/config";

describe('adapters/get-readings-for-station-id', () => {
  describe("GIVEN a valid input paramater", () => {
    const stationId = '3680';

    describe("GIVEN a successful response from API", () => {
      const mockItems : Partial<StationMeterReading>[] = [
        {
          "@id": "idOne"
        },
        {
          "@id": "idTwo"
        }
      ];

      const mockResponseData = {
        items: mockItems
      };

      const mockResponse : Partial<Response> = {
        status: 304,
        ok: true,
        json: async() => {
          return mockResponseData
        },
      };

      const mockFetch : any = jest.fn().mockResolvedValue(mockResponse);

      describe("WHEN triggering the function", () => {

        const output : {
          result?: Partial<StationMeterReading>[],
          error?: Error
        } = {};

        beforeAll(async() => {
          try {
            output.result = await getReadingsForStationId({
              stationId,
              fetch: mockFetch
            })
          } catch (err) {
            output.error = err;
          }
        });

        it("SHOULD have formed the correct url", () => {
          expect(mockFetch).toHaveBeenCalledWith(`${config.eaFloodMonitoringApiRoot}/id/stations/${stationId}/measures`)
        });

        it("SHOULD return the meter readings", () => {
          expect(output.result).toEqual(mockItems);
        });
      });
    });

    describe("GIVEN an invalid status from the API", () => {

      const mockResponse : Partial<Response> = {
        ok: false,
        status: 404,
      };

      const mockFetch: any = jest.fn().mockResolvedValue(mockResponse);

      describe("WHEN triggering the function", () => {

        const output : {
          result?: Partial<StationMeterReading>[],
          error?: Error
        } = {};

        beforeAll(async() => {
          try {
            output.result = await getReadingsForStationId({
              stationId,
              fetch: mockFetch
            })
          } catch (err) {
            output.error = err;
          }
        });

        it("SHOULD NOT return any meter readings", () => {
          expect(output.result).toBeUndefined();
        });

        it("SHOULD return an error including the invalid status code", () => {
          expect(output.error.message).toEqual("Unexpected response code 404")
        })
      });
    });

    describe("GIVEN an error thrown from node-fetch", () => {

      const mockResponse : Partial<Response> = {
        ok: false,
        status: 404,
      };

      const mockError = new Error("I am a mock error");

      const mockFetch: any = jest.fn().mockRejectedValue(mockError);

      describe("WHEN triggering the function", () => {

        const output : {
          result?: Partial<StationMeterReading>[],
          error?: Error
        } = {};

        beforeAll(async() => {
          try {
            output.result = await getReadingsForStationId({
              stationId,
              fetch: mockFetch
            })
          } catch (err) {
            output.error = err;
          }
        });

        it("SHOULD NOT return any meter readings", () => {
          expect(output.result).toBeUndefined();
        });

        it("SHOULD return the thrown error", () => {
          expect(output.error).toEqual(mockError);
        });
      });
    });
  });
});