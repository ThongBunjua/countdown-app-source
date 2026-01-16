import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// เปลี่ยนชื่อ 'countdown-app' เป็นชื่อ Repo ของคุณ
export default defineConfig({
  plugins: [react()],
  base: '/countdown-app/', 
})