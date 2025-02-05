import { deleteDayOfWeekFromDate } from "./deleteDayOfWeekFromDate";

describe("deleteDayOfWeekFromDate", () => {
  test("removes the day of the week from a date string", () => {
    expect(deleteDayOfWeekFromDate("Monday, 05 Feb 2025")).toBe("05 Feb 2025");
  });

  test("removes the day of the week when a different day is given", () => {
    expect(deleteDayOfWeekFromDate("Sunday, 10 Dec 2023")).toBe("10 Dec 2023");
  });

  test("returns input unchanged if no day of the week is present", () => {
    expect(deleteDayOfWeekFromDate("05 Feb 2025")).toBe("05 Feb 2025");
  });

  test("handles an empty string", () => {
    expect(deleteDayOfWeekFromDate("")).toBe("Unknown");
  });

});
