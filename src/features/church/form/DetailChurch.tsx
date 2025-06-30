import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const DetailChurch = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const {
		data: church,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['church', id],
		queryFn: async () => {
			const res = await fetch(`/api/churches/${id}`);
			if (!res.ok) throw new Error('Failed to fetch church');
			return await res.json();
		},
		enabled: !!id,
	});

	if (isLoading) return <div>Loading...</div>;
	if (error || !church) return <div>Failed to load church data.</div>;

	return (
		<Card className='mx-auto w-full max-w-4xl'>
			<CardHeader>
				<CardTitle className='text-left text-2xl font-bold text-gray-900'>교회 상세정보</CardTitle>
			</CardHeader>
			<CardContent className='space-y-6'>
				<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
					<div>
						<p className='text-sm text-muted-foreground'>교회 이름</p>
						<p className='font-medium'>{church.name}</p>
					</div>
					<div>
						<p className='text-sm text-muted-foreground'>교회 번호</p>
						<p className='font-medium'>{church.code}</p>
					</div>
					<div>
						<p className='text-sm text-muted-foreground'>위치</p>
						<p className='font-medium'>{church.location}</p>
					</div>
					<div>
						<p className='text-sm text-muted-foreground'>담임 목사</p>
						<p className='font-medium'>{church.pastor || '-'}</p>
					</div>
					<div>
						<p className='text-sm text-muted-foreground'>연락처</p>
						<p className='font-medium'>{church.phone || '-'}</p>
					</div>
				</div>

				<Separator />

				<div className='flex justify-end gap-2'>
					<Button variant='secondary' onClick={() => navigate(-1)}>
						목록으로 돌아가기
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default DetailChurch;
