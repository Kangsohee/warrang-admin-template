import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { flexRender, getCoreRowModel, getPaginationRowModel, PaginationState, useReactTable } from '@tanstack/react-table';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useMemo } from 'react';

import { fetchPokemons } from '@/apis/pokemons.ts';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import useUserFilters from './useUserFilters';

const DataTable = () => {
	const { limit, offset, currentPage, pageSize, changePagination } = useUserFilters();

	const { isPending, data } = useQuery({
		queryKey: ['chs', limit, offset],
		queryFn: () => fetchPokemons({ limit, offset }),
		placeholderData: keepPreviousData,
	});

	console.log('data> ', data);
	const paginationState = {
		pageIndex: currentPage - 1, // zero-based index for React Table
		pageSize: pageSize,
	};

	const pageCount = Math.ceil((data?.count || 0) / pageSize);

	const columns = useMemo(
		() => [
			{
				header: 'ID',
				accessorKey: 'id',
			},
			{
				header: '사용자 이름',
				accessorKey: 'name',
			},
			{
				header: '사용자 번호',
				accessorKey: 'height',
			},
			{
				header: '사용자 교회',
				accessorKey: 'weight',
			},
		],
		[],
	);

	const handlePaginationChange = (updaterOrValue: PaginationState | ((old: PaginationState) => PaginationState)) => {
		const pagination = typeof updaterOrValue === 'function' ? updaterOrValue(paginationState) : updaterOrValue;

		changePagination({
			pageIndex: pagination.pageIndex, // converting one-based index to zero-based
			pageSize: pagination.pageSize,
		});
	};

	const table = useReactTable({
		data: data?.results || [],
		columns,
		pageCount: pageCount,
		state: {
			pagination: paginationState,
		},
		onPaginationChange: handlePaginationChange,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		manualPagination: true,
		manualFiltering: true,
	});

	const skeletons = useMemo(() => {
		return Array(pageSize).fill({});
	}, [pageSize]);

	return (
		<div className='flex flex-1 flex-col space-y-4'>
			<div className='relative flex flex-1'>
				<div className='absolute bottom-0 left-0 right-0 top-0 flex overflow-scroll rounded-md border md:overflow-auto'>
					<ScrollArea className='flex-1'>
						<Table className='relative'>
							<TableHeader>
								{table.getHeaderGroups().map((headerGroup) => (
									<TableRow key={headerGroup.id}>
										{headerGroup.headers.map((header) => (
											<TableHead key={header.id}>
												{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
											</TableHead>
										))}
									</TableRow>
								))}
							</TableHeader>
							<TableBody>
								{isPending && (
									<>
										{[...skeletons].map((_, index) => (
											<TableRow key={index}>
												{columns.map((column) => (
													<TableCell key={column.header} className='animate-pulse' />
												))}
											</TableRow>
										))}
									</>
								)}
								{table.getRowModel().rows?.length ? (
									table.getRowModel().rows.map((row) => (
										<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
											{row.getVisibleCells().map((cell) => (
												<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
											))}
										</TableRow>
									))
								) : (
									<TableRow>
										<TableCell colSpan={columns.length} className='h-24 text-center'>
											No results.
										</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
						<ScrollBar orientation='horizontal' />
					</ScrollArea>
				</div>
			</div>

			<div className='flex flex-col items-center justify-end gap-2 space-x-2 py-2 sm:flex-row'>
				<div className='flex w-full items-center justify-between'>
					<div className='flex-1 text-sm text-muted-foreground'>
						{(data?.count || 0) > 0 ? (
							<>
								Showing {paginationState.pageIndex * paginationState.pageSize + 1} to{' '}
								{Math.min((paginationState.pageIndex + 1) * paginationState.pageSize, data?.count || 0)} of {data?.count || 0} entries
							</>
						) : (
							'No entries found'
						)}
					</div>
					<div className='flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8'>
						<div className='flex items-center space-x-2'>
							<p className='whitespace-nowrap text-sm font-medium'>Rows per page</p>
							<Select
								value={`${paginationState.pageSize}`}
								onValueChange={(value) => {
									table.setPageSize(Number(value));
								}}
							>
								<SelectTrigger className='h-8 w-[70px]'>
									<SelectValue placeholder={paginationState.pageSize} />
								</SelectTrigger>
								<SelectContent side='top'>
									{[10, 20, 30, 40, 50].map((pageSize) => (
										<SelectItem key={pageSize} value={`${pageSize}`}>
											{pageSize}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>
				<div className='flex w-full items-center justify-between gap-2 sm:justify-end'>
					<div className='flex w-[150px] items-center justify-center text-sm font-medium'>
						{(data?.count || 0) > 0 ? (
							<>
								Page {paginationState.pageIndex + 1} of {table.getPageCount()}
							</>
						) : (
							'No pages'
						)}
					</div>
					<div className='flex items-center space-x-2'>
						<Button
							aria-label='Go to first page'
							variant='outline'
							className='hidden h-8 w-8 p-0 lg:flex'
							onClick={() => table.setPageIndex(0)}
							disabled={!table.getCanPreviousPage()}
						>
							<DoubleArrowLeftIcon className='h-4 w-4' aria-hidden='true' />
						</Button>
						<Button
							aria-label='Go to previous page'
							variant='outline'
							className='h-8 w-8 p-0'
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							<ChevronLeftIcon className='h-4 w-4' aria-hidden='true' />
						</Button>
						<Button
							aria-label='Go to next page'
							variant='outline'
							className='h-8 w-8 p-0'
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							<ChevronRightIcon className='h-4 w-4' aria-hidden='true' />
						</Button>
						<Button
							aria-label='Go to last page'
							variant='outline'
							className='hidden h-8 w-8 p-0 lg:flex'
							onClick={() => table.setPageIndex(table.getPageCount() - 1)}
							disabled={!table.getCanNextPage()}
						>
							<DoubleArrowRightIcon className='h-4 w-4' aria-hidden='true' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DataTable;
