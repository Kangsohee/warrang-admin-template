import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useBreadcrumbStore } from '@/stores/breadcrumb';

import AppBreadcrumb from './AppBreadcrumb.tsx';

const AppHeader = () => {
	// TODO - How to get Histories ...
	const { histories } = useBreadcrumbStore();

	return (
		<header className='flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4'>
			<SidebarTrigger className='-ml-1' />
			<Separator orientation='vertical' className='mr-2 h-4' />
			<AppBreadcrumb histories={histories} />
		</header>
	);
};

export default AppHeader;
