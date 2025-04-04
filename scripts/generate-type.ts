// scripts/generate-api.ts
import { generate } from "openapi-typescript-codegen";

// Generate client
generate({
  input: "http://localhost:3000/swagger-json", // Your NestJS Swagger JSON endpoint
  output: "./generated",
  httpClient: "fetch", // or 'axios'
  useOptions: true,
  useUnionTypes: true,
});
