/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_EXERCISEDB_API_KEY: string;
  // Add other environment variables here
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
