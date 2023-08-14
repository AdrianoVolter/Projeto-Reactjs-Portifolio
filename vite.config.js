import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Adicione essa linha - ela fará o Vite servir na interface de rede correta dentro do contêiner Docker
    port: 5000
  }
})


