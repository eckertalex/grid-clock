import {defineConfig} from 'vite'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
	plugins: [react(), ...(mode !== 'test' ? [eslintPlugin()] : [])],
	build: {
		// produce sourcemaps for debug builds
		sourcemap: mode !== 'production',
	},
}))
