import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const DataTable = () => {
	return (
		<div className='flex flex-1 flex-col space-y-4'>
			<div className='relative flex flex-1'>
				<div className='absolute bottom-0 left-0 right-0 top-0 flex overflow-scroll rounded-md border md:overflow-auto'>
					<ScrollArea className='flex-1'>
						<ScrollBar orientation='horizontal' />
					</ScrollArea>
				</div>
			</div>
		</div>
	);
};

export default DataTable;
