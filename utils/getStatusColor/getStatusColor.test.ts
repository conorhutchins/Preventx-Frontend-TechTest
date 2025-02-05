import { getStatusColors } from "./getStatusColor";

describe("getStatusColors", () => {
  test("returns correct colors for abnormal status", () => {
    expect(getStatusColors("abnormal")).toEqual({
      text: "text-status-abnormal",
      bar: "bg-status-abnormal",
      bg: "bg-status-abnormalBg",
    });
  });

  test("returns correct colors for normal status", () => {
    expect(getStatusColors("normal")).toEqual({
      text: "text-status-normal",
      bar: "bg-status-normal",
      bg: "bg-status-normalBg",
    });
  });

  test("returns correct colors for warning status", () => {
    expect(getStatusColors("warning")).toEqual({
      text: "text-status-warning",
      bar: "bg-status-warning",
      bg: "bg-status-warningBg",
    });
  });

  test("returns correct colors for issue status", () => {
    expect(getStatusColors("issue")).toEqual({
      text: "text-status-issue",
      bar: "bg-status-issue",
      bg: "bg-status-issueBg",
    });
  });

  test("returns default colors for unknown status", () => {
    expect(getStatusColors("unknown-status")).toEqual({
      text: "text-gray-600",
      bar: "bg-gray-300",
      bg: "bg-gray-200",
    });
  });
});
