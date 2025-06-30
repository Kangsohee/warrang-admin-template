import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { Toaster } from '@/components/ui/toaster';
import Layout from '@/layouts/Layout';

import Home from './pages/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'churches',
				async lazy() {
					// Multiple routes in lazy file
					const { Component } = await import('./pages/churches');
					return { Component };
				},
			},
			{
				path: 'churches/create',
				async lazy() {
					return await import('./pages/churches/create');
				},
			},
			{
				path: 'crews',
				async lazy() {
					// Multiple routes in lazy file
					const { Component } = await import('./pages/crews');
					return { Component };
				},
			},
			{
				path: 'posts',
				async lazy() {
					// Multiple routes in lazy file
					const { Component } = await import('./pages/posts');
					return { Component };
				},
			},
			{
				path: 'reports',
				async lazy() {
					// Multiple routes in lazy file
					const { Component } = await import('./pages/reports');
					return { Component };
				},
			},
			{
				path: 'square/free-markets',
				async lazy() {
					// Multiple routes in lazy file
					const { Component } = await import('./pages/square/free-markets');
					return { Component };
				},
			},
			{
				path: 'users',
				async lazy() {
					// Multiple routes in lazy file
					const { Component } = await import('./pages/users');
					return { Component };
				},
			},
			{
				path: 'churches/:id',
				async lazy() {
					// 상세 페이지 컴포넌트 임포트
					const { Component } = await import('./pages/churches/detail');
					return { Component };
				},
			},
		],
	},
]);

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
		<Toaster />
	</QueryClientProvider>
);

export default App;
