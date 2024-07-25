declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_HOST: string;
      PORT?: string;
      DB_HOST: string;
    }
  }
}
