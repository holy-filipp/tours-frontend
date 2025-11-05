import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'http://192.168.0.131:8000/docs?api-docs.json',
  output: './app/client',
  plugins: [
    '@hey-api/typescript',
    '@hey-api/client-ofetch',
    {
      name: '@pinia/colada',
      queryOptions: true,
      queryKeys: true
    }
  ],
});