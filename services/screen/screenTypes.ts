import type { ScreenDetailsResponse } from "../../test-utilities/api/contract";
/* ---------------------------------------
   Clean up paths by only exporting the neccessary types provided in contact.ts
---------------------------------------- */
export type { ScreenDetailsResponse };
/* ---------------------------------------
   Standard fetch function response.
    Represents the result of fetching screen details.
----------------------------------------- */
export interface ScreenServiceFetchResult {
  data: ScreenDetailsResponse | null;
  error: string | null;
}