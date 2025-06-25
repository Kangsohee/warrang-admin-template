import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		port: 3000,
		proxy: {
			'/api': {
				target: 'http://54.180.86.165',
				changeOrigin: true,
				// rewrite: (path) => {
				// 	console.log('path> ', path, path.replace(/^\/api/, ''));
				// 	return path.replace(/^\/api/, '');
				// },
				secure: false,
				configure: (proxy) => {
					proxy.on('proxyReq', (_proxyReq, req) => {
						console.group('Proxying request');
						console.log('Method:', req.method);
						console.log('URL:', req.url);
						console.log('Headers:', req.headers);
						console.groupEnd();
					});

					proxy.on('proxyRes', (proxyRes) => {
						console.group('Proxying response');
						console.log('Proxied response status:', proxyRes.statusCode);
						console.log('Proxied response headers:', proxyRes.headers);
						console.groupEnd();
					});
				},
			},
		},
	},
});
