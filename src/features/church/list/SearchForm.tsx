import { useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input.tsx';
import { cn } from '@/lib/utils';

import useChurchFilters from './useChurchFilters';

const SearchForm = () => {
	const { tempSearchQuery, changeTempQuery } = useChurchFilters();
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/churches/create'); // ← 이 경로로 이동
	};

	return (
		<div className='flex flex-wrap items-center gap-4'>
			<Input
				placeholder={`Search...`}
				value={tempSearchQuery.title ?? ''}
				onChange={(e) => changeTempQuery('title', e.target.value)}
				// className={cn('w-full md:max-w-sm', isLoading && 'animate-pulse')}
				className={cn('w-full md:max-w-sm')}
			/>
			<div className='flex flex-wrap items-center gap-2 md:flex-row sm:justify-end'>
				<Button onClick={handleClick}>신규 추가</Button>
			</div>
		</div>
	);
};

export default SearchForm;
