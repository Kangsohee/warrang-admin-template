import { Separator } from '@/components/ui/separator';
import { DataTable, SearchForm } from '@/features/crew/list';
import Head from '@/layouts/Head.tsx';
import PageContainer from '@/layouts/PageContainer.tsx';

export const Component = () => {
	return (
		<PageContainer scrollable={false}>
			<div className='flex flex-1 flex-col space-y-4'>
				{/* Header */}
				<div className='flex items-start justify-between'>
					<Head title='크루 목록' description='크루 리스트' />
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
