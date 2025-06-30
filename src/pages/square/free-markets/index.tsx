import { Separator } from '@/components/ui/separator';
import { DataTable, SearchForm } from '@/features/square/freeMarket/list';
import Head from '@/layouts/Head.tsx';
import PageContainer from '@/layouts/PageContainer.tsx';
import { useBreadcrumbStore } from '@/stores/breadcrumb';
import { useEffect } from 'react';

export const Component = () => {
	const { updateHistories } = useBreadcrumbStore();

	useEffect(() => {
		updateHistories([{ name: 'Square', pathname: 'squares' }]);
	}, [updateHistories]);

	return (
		<PageContainer scrollable={false}>
			<div className='flex flex-1 flex-col space-y-4'>
				{/* Header */}
				<div className='flex items-start justify-between'>
					<Head title='나눔 목록' description='나눔 리스트' />
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
