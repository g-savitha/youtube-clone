export const APP_CONFIG = {
  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",

  // Application Information
  APP_NAME: 'Youtube Clone',
  VERSION: '1.0.0',
  ENVIRONMENT: import.meta.env.VITE_NODE_ENV || 'development',
}