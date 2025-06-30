import DetailChurch from '@/features/church/form/DetailChurch';
import { useBreadcrumbStore } from '@/stores/breadcrumb';
import { useEffect } from 'react';

export function Component() {
	const { updateHistories } = useBreadcrumbStore();

	useEffect(() => {
		updateHistories([
			{ name: 'Churches', pathname: 'churches' },
			{ name: 'Detail', pathname: 'churches/detail' },
		]);
	}, [updateHistories]);

	return <DetailChurch />;
}

Component.displayName = 'ChurchDetailPage';
