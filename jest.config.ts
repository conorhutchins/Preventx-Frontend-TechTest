import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Updated for TypeScript
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Ensures Jest processes TypeScript files
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["**/__tests__/**/*.(ts|tsx)", "**/?(*.)+(test|spec).(ts|tsx)"],
};

export default config;
