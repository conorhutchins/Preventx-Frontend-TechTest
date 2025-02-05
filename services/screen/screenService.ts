import { getById } from "../../test-utilities/api/api";
import { ScreenServiceFetchResult } from "./screenTypes";

export const fetchScreenDetails = async (screenReference: string): Promise<ScreenServiceFetchResult> => {
    try {
      const response = await getById(screenReference);
  
      if (response.status === 404) {
        return { data: null, error: "Screen not found." };
      }
  
      if (response.status === 500) {
        return { data: null, error: "An error occurred while retrieving the screen details." };
      }
  
      return { data: response.data || null, error: null };
    } catch (err) {
        console.error(err);
      return { data: null, error: "An unexpected error occurred." };
    }
  };
