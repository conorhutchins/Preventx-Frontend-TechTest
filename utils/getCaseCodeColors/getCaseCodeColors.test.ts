import { getCaseCodeColors } from "./getCaseCodeColors";

describe("getCaseCodeColors", () => {
  test("returns correct colors for CLOTTED", () => {
    expect(getCaseCodeColors("CLOTTED")).toEqual({
      text: "text-status-warning",
      bg: "bg-status-warningBg",
    });
  });

  test("returns correct colors for DETECTED", () => {
    expect(getCaseCodeColors("DETECTED")).toEqual({
      text: "text-status-informative",
      bg: "bg-status-informativeBg",
    });
  });

  test("returns correct colors for REACTIVE", () => {
    expect(getCaseCodeColors("REACTIVE")).toEqual({
      text: "text-status-abnormal",
      bg: "bg-status-abnormal",
    });
  });

  test("returns default colors for unknown case code", () => {
    expect(getCaseCodeColors("UNKNOWN_CASE_CODE")).toEqual({
      text: "text-gray-600",
      bg: "bg-gray-300",
    });
  });
});
