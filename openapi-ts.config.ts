import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: './api-docs.json',
  output: './app/client',
  plugins: [
    {
      name: '@pinia/colada',
      queryOptions: true,
      queryKeys: true
    },
  ],
});