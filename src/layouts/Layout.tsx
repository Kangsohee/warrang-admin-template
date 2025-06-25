import { Outlet } from 'react-router';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar.tsx';

import AppHeader from './AppHeader.tsx';
import AppSidebar from './AppSidebar.tsx';

const Layout = () => {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<AppHeader />
				<div className='flex flex-1 flex-col gap-4 p-4'>
					<Outlet />
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
};

export default Layout;
