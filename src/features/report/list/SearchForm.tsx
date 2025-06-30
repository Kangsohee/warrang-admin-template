import { Input } from '@/components/ui/input.tsx';
import { cn } from '@/lib/utils';
import useReportFilters from './useReportFilters';
import { Button } from '@/components/ui/button';

const SearchForm = () => {
	const { tempSearchQuery, changeTempQuery } = useReportFilters();

	// console.l

	return (
		<div className='flex flex-wrap items-center gap-4'>
			<Input
				placeholder={`Search...`}
				value={tempSearchQuery.title ?? ''}
				onChange={(e) => changeTempQuery('title', e.target.value)}
				// className={cn('w-full md:max-w-sm', isLoading && 'animate-pulse')}
				className={cn('w-full md:max-w-sm')}
			/>
			<div className='flex flex-wrap items-center gap-2 md:flex-row'>
				<Button>신규 추가</Button>
			</div>
		</div>
	);
};

export default SearchForm;
