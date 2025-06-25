import { Fragment } from 'react';
import { Link } from 'react-router';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb.tsx';

interface Props {
	histories: Array<{ name: string; pathname: string }>;
}

const AppBreadcrumb = ({ histories }: Props) => {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				{/* Default */}
				<BreadcrumbItem>
					<BreadcrumbLink asChild>
						<Link to={{ pathname: '/' }}>Home</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>
				{histories.map(({ name, pathname }) => (
					<Fragment key={pathname}>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link to={{ pathname }}>{name}</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
					</Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export default AppBreadcrumb;
