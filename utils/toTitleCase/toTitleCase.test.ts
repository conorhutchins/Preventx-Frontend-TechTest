import { toTitleCase } from "./toTitleCase";

describe("toTitleCase", () => {
  test("capitalises the first letter of each word in a hyphenated string", () => {
    expect(toTitleCase("hello-world")).toBe("Hello World");
  });

  test("handles a single word", () => {
    expect(toTitleCase("javascript")).toBe("Javascript");
  });

  test("handles an already title-cased hyphenated string", () => {
    expect(toTitleCase("Hello-World")).toBe("Hello World");
  });

  test("handles an empty string", () => {
    expect(toTitleCase("")).toBe("");
  });

});
