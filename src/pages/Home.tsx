import dayjs from 'dayjs';
import { useEffect } from 'react';

import { useToast } from '@/hooks/use-toast';
import { useBreadcrumbStore } from '@/stores/breadcrumb';

const Home = () => {
	const { toast } = useToast();

	const { updateHistories } = useBreadcrumbStore();

	useEffect(() => {
		updateHistories([]);
	}, [updateHistories]);

	useEffect(() => {
		toast({ title: 'Hello Sohee!', description: dayjs().toString() });
	}, [toast]);

	return (
		<>
			<div className='grid auto-rows-min gap-4 md:grid-cols-3'>
				<div className='aspect-video rounded-xl bg-muted/50' />
				<div className='aspect-video rounded-xl bg-muted/50' />
				<div className='aspect-video rounded-xl bg-muted/50' />
			</div>
			<div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />
		</>
	);
};

export default Home;
