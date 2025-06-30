import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const CreateChurch = () => {
	const [form, setForm] = useState({
		name: '',
		code: '',
		address: '',
		phone: '',
		pastorName: '',
	});

	const handleChange = (field: string, value: string) => {
		setForm((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// postChurch(form)
		console.log('신규 등록:', form);
	};

	return (
		<form onSubmit={handleSubmit} className='space-y-6 max-w-xl'>
			<div className='grid gap-4'>
				<div className='grid gap-2'>
					<Label htmlFor='name'>교회 이름</Label>
					<Input id='name' value={form.name} onChange={(e) => handleChange('name', e.target.value)} required />
				</div>
				<div className='grid gap-2'>
					<Label htmlFor='code'>교회 번호</Label>
					<Input id='code' value={form.code} onChange={(e) => handleChange('code', e.target.value)} />
				</div>
				<div className='grid gap-2'>
					<Label htmlFor='address'>주소</Label>
					<Input id='address' value={form.address} onChange={(e) => handleChange('address', e.target.value)} />
				</div>
				<div className='grid gap-2'>
					<Label htmlFor='phone'>연락처</Label>
					<Input id='phone' value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} />
				</div>
				<div className='grid gap-2'>
					<Label htmlFor='pastorName'>담당 목사님</Label>
					<Input id='pastorName' value={form.pastorName} onChange={(e) => handleChange('pastorName', e.target.value)} />
				</div>
			</div>
			<Button type='submit'>등록</Button>
		</form>
	);
};

export default CreateChurch;
