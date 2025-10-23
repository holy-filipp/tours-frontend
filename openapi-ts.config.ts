import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'http://127.0.0.1:8000/docs?api-docs.json',
  output: './app/client',
  plugins: [
    '@hey-api/client-ofetch',
    {
      name: '@pinia/colada',
      queryOptions: true,
      queryKeys: true
    }
  ],
});