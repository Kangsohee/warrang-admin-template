import { Input } from '@/components/ui/input.tsx';
import { cn } from '@/lib/utils';

import useFreeMarketFilters from './useFreeMarketFilters';

const SearchForm = () => {
	const { tempSearchQuery, changeTempQuery } = useFreeMarketFilters();

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
		</div>
	);
};

export default SearchForm;
