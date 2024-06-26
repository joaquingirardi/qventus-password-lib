import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(() => {

  return {
    base: "/",
    plugins: [react()],
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
  }
});