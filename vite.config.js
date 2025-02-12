import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',  
    },
  },
  server: {
    host: '0.0.0.0', // Allow access from the local network
    port: 3000,       // setup for loacl network
  },
});

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path'; // Import the path module

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'), // Correct alias setup
//     },
//   },
//   server: {
//     host: '0.0.0.0', // Allow access from the local network
//     port: 3000, // Setup for local network
//   },
// });
