import { useEffect } from 'react';

import { Separator } from '@/components/ui/separator';
import { DataTable, SearchForm } from '@/features/pokemon/list';
import Head from '@/layouts/Head.tsx';
import PageContainer from '@/layouts/PageContainer.tsx';
import { useBreadcrumbStore } from '@/stores/breadcrumb';

export const Component = () => {
	const { updateHistories } = useBreadcrumbStore();

	useEffect(() => {
		updateHistories([{ name: 'Post', pathname: 'posts' }]);
	}, [updateHistories]);

	return (
		<PageContainer scrollable={false}>
			<div className='flex flex-1 flex-col space-y-4'>
				{/* Header */}
				<div className='flex items-start justify-between'>
					<Head title='게시판 목록' description='게시판 리스트' />
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
