import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import {
	ChevronRight,
	Home,
	LucideChurch,
	LucideMonitorStop,
	LucideTable,
	LucideTriangleAlert,
	LucideUser,
	LucideUsers,
} from 'lucide-react';
import { Link } from 'react-router';

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from '@/components/ui/sidebar.tsx';

const menus = [
	{
		title: 'Home',
		icon: Home,
		to: '/',
	},
	{
		title: 'Churches',
		icon: LucideChurch,
		to: '/churches',
	},
	{
		title: 'Users',
		icon: LucideUser,
		to: '/users',
	},
	{
		title: 'Crews',
		icon: LucideUsers,
		to: '/crews',
	},
	{
		title: 'Square',
		icon: LucideMonitorStop,
		items: [
			{
				title: 'Free Markets',
				icon: LucideMonitorStop,
				to: '/square/free-markets',
			},
		],
	},
	{
		title: 'Posts',
		icon: LucideTable,
		to: '/posts',
	},
	{
		title: 'Reports',
		icon: LucideTriangleAlert,
		to: '/reports',
	},
	{
		title: 'Pokemons',
		icon: LucideMonitorStop,
		to: '/pokemons',
	},
];
const AppSidebar = () => {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{menus.map((menu) =>
								menu.items && (menu.items.length || 0) > 0 ? (
									<Collapsible key={menu.title} asChild defaultOpen className='group/collapsible'>
										<SidebarMenuItem>
											<CollapsibleTrigger asChild>
												<SidebarMenuButton tooltip={menu.title}>
													<menu.icon />
													<span>{menu.title}</span>
													<ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
												</SidebarMenuButton>
											</CollapsibleTrigger>
											<CollapsibleContent>
												<SidebarMenuSub>
													{menu.items?.map((subItem) => (
														<SidebarMenuSubItem key={subItem.title}>
															<SidebarMenuSubButton asChild>
																<Link to={{ pathname: subItem.to }}>
																	<span>{subItem.title}</span>
																</Link>
															</SidebarMenuSubButton>
														</SidebarMenuSubItem>
													))}
												</SidebarMenuSub>
											</CollapsibleContent>
										</SidebarMenuItem>
									</Collapsible>
								) : (
									<SidebarMenuItem key={menu.title}>
										<SidebarMenuButton asChild>
											<Link to={{ pathname: menu.to }}>
												<menu.icon />
												<span>{menu.title}</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								),
							)}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};

export default AppSidebar;
