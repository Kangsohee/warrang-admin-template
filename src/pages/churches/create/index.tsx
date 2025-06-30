import CreateChurch from '@/features/church/form/CreateChurch';
import { useBreadcrumbStore } from '@/stores/breadcrumb';
import { useEffect } from 'react';

export function Component() {
	const { updateHistories } = useBreadcrumbStore();

	useEffect(() => {
		updateHistories([
			{ name: 'Churches', pathname: 'churches' },
			{ name: 'Create', pathname: 'churches/create' },
		]);
	}, [updateHistories]);

	return <CreateChurch />;
}

Component.displayName = 'ChurchCreatePage';
