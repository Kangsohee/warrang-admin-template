import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useSearchParams } from 'react-router';

import { getChurches, postChurches } from '@/apis/grace-talk/churches/api';

export const useGetChurches = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		search: '',
		page: '1',
		page_size: '30',
	});
	const [tempSearchQuery, setTempSearchQuery] = useState({
		search: searchParams.get('search') || '',
	});

	const { data, isSuccess, isError, isLoading } = useQuery({
		queryKey: ['churches', searchParams.get('page'), searchParams.get('page_size'), searchParams.get('search')],
		queryFn: () =>
			getChurches({
				page: +(searchParams.get('page') || 1),
				page_size: +(searchParams.get('page_size') || 30),
				search: searchParams.get('search') || undefined,
			}),
	});

	return {
		searchQuery: {
			page: +(searchParams.get('page') || 1),
			page_size: +(searchParams.get('page_size') || 30),
			search: searchParams.get('search') || undefined,
		},
		tempSearchQuery,
		setTempSearchQuery,
		setSearchParams,
		data,
		isSuccess,
		isError,
		isLoading,
	};
};

export const usePostChurches = () => {
	const { mutate, isPending, isSuccess, isError } = useMutation({
		mutationFn: postChurches,
	});

	return {
		mutate,
		isPending,
		isSuccess,
		isError,
	};
};
