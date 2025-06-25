import { useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';

type PaginationType = {
	pageIndex: number;
	pageSize: number;
};

const usePokemonFilters = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		title: '',
		limit: '20',
		offset: '0',
	});
	console.log('searchParams> ', searchParams.get('title'))
	const [tempSearchQuery, setTempSearchQuery] = useState({
		title: searchParams.get('title') || '',
	});

	const { limit, offset, page } = useMemo(() => {
		const nextLimit = +(searchParams.get('limit') || 20);
		const nextOffset = +(searchParams.get('offset') || 0);
		const nextPage = Math.floor(nextOffset / nextLimit) + 1;

		return {
			limit: nextLimit,
			offset: nextOffset,
			page: nextPage,
		};
	}, [searchParams]);

	const changeTempQuery = useCallback((key: string, query: string) => {
		setTempSearchQuery((prev) => ({
			...prev,
			[key]: query,
		}));
	}, []);

	const changePagination = useCallback(
		({ pageIndex, pageSize }: PaginationType) => {
			const nextOffset = pageIndex * pageSize;

			setSearchParams((prev) => {
				const searchParams = new URLSearchParams(prev);
				const prevPageSize = +searchParams.get('limit')!;

				searchParams.set('offset', prevPageSize !== pageSize ? '0' : nextOffset.toString());
				searchParams.set('limit', pageSize.toString());
				return searchParams;
			});
		},
		[setSearchParams],
	);

	return {
		limit,
		offset,
		searchParams,
		tempSearchQuery,
		currentPage: page,
		pageSize: limit,
		setSearchParams,
		setTempSearchQuery,
		changeTempQuery,
		changePagination,
	};
};

export default usePokemonFilters;
