import { useLoaderData } from 'react-router';

export const loader = async () => {
	await new Promise((r) => setTimeout(r, 500));
	return 'Users Page';
};

export function Component() {
	const data = useLoaderData() as string;

	return (
		<div>
			<p>{data}</p>
		</div>
	);
}

Component.displayName = 'UsersPage';
