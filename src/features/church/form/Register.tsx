import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { registerSchema } from '../schemas';

const Register = () => {
	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		values: {
			name: '',
		},
	});

	const onSubmit = (nextData: z.infer<typeof registerSchema>) => {
		console.log('@ submit data', nextData);
	};

	return (
		<Card className='mx-auto w-full'>
			<CardHeader className='text-left text-2xl font-bold'>
				<CardTitle>교회 등록</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<div className='space-y-6'>
										<FormItem className='w-full'>
											<FormLabel className='text-black'>Name</FormLabel>
											<FormControl>
												<Input placeholder='Enter product name' {...field} />
											</FormControl>
											<FormMessage className='text-black' />
										</FormItem>
									</div>
								)}
							/>
						</div>
						<Button type='submit'>Add Product</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default Register;
