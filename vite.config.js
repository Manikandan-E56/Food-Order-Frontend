import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
  credentials:true,
  // server: {
  //   host:true,
  //   cors:{
  //     origin:['http://localhost:5000','http://192.168.173.50:5000'],
  //   },
  // },
})

