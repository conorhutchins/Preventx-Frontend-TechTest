import { fetchScreenDetails } from "../screen/screenService";
import { getById } from "../../test-utilities/api/api";
import { ScreenServiceFetchResult } from "../screen/screenTypes";

// Mock the API call
jest.mock("../../test-utilities/api/api", () => ({
    getById: jest.fn(),
  }));
  
  describe("fetchScreenDetails", () => {
    let consoleErrorSpy: jest.SpyInstance;
  
    beforeAll(() => {
      consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    });
  
    afterAll(() => {
      consoleErrorSpy.mockRestore();
    });
  
    test("returns an unexpected error when API call throws an exception", async () => {
      (getById as jest.Mock).mockRejectedValue(new Error("Network Error"));
  
      const result: ScreenServiceFetchResult = await fetchScreenDetails("SR_EXCEPTION");
  
      expect(result).toEqual({ data: null, error: "An unexpected error occurred." });
    });
  });