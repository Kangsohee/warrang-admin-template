import { Separator } from '@/components/ui/separator';
import { DataTable, SearchForm } from '@/features/user/list';
import Head from '@/layouts/Head.tsx';
import PageContainer from '@/layouts/PageContainer.tsx';
import { useBreadcrumbStore } from '@/stores/breadcrumb';
import { useEffect } from 'react';

export const Component = () => {
	const { updateHistories } = useBreadcrumbStore();

	useEffect(() => {
		updateHistories([{ name: 'User', pathname: 'users' }]);
	}, [updateHistories]);

	return (
		<PageContainer scrollable={false}>
			<div className='flex flex-1 flex-col space-y-4'>
				{/* Header */}
				<div className='flex items-start justify-between'>
					<Head title='사용자 목록' description='사용자 리스트' />
					{/*	TODO - Some Actions */}
				</div>
				<Separator />
				{/* Search Form */}
				<SearchForm />
				{/* Table */}
				<DataTable />
			</div>
		</PageContainer>
	);
};
