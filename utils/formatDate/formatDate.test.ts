import { formatDate } from "./formatDate";

describe("formatDate", () => {
  test("formats a valid date string as DD MMM YYYY", () => {
    expect(formatDate("2025-02-05T00:00:00Z")).toBe("Feb 05, 2025");
  });

  test("formats another valid date string", () => {
    expect(formatDate("2023-12-25T12:00:00Z")).toBe("Dec 25, 2023");
  });

  test("handles an empty string", () => {
    expect(formatDate("")).toBe("N/A");
  });

  test("handles a null value", () => {
    expect(formatDate(null)).toBe("N/A");
  });

  test("handles an undefined value", () => {
    expect(formatDate(undefined)).toBe("N/A");
  });

  test("handles an invalid date format", () => {
    expect(formatDate("invalid-date")).toBe("Invalid Date");
  });
});
