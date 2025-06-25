import { ScrollArea } from '@radix-ui/react-scroll-area';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
	scrollable?: boolean;
}

const PageContainer = ({ scrollable = true, children }: Props) => (
	<>
		{scrollable ? (
			<ScrollArea className='h-[calc(100dvh-52px)]'>
				<div className='flex flex-1 p-4 md:px-6'>{children}</div>
			</ScrollArea>
		) : (
			<div className='flex flex-1 p-4 md:px-6'>{children}</div>
		)}
	</>
);

export default PageContainer;
