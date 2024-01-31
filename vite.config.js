import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@mui/x-charts': path.resolve(__dirname, '/home/gladys/Documents/customer-support (1)/node_modules/@mui/x-charts'),
    },
  },

})


