import { BasePagination } from '../types';

export type GetChurchesRequest = BasePagination & { search?: string };

export type GetChurchesResponse = {
	data: {
		id: 0;
		name: string;
	}[];
	metadata: {
		current_page: 0;
		page_size: 0;
		total_items: 0;
		total_pages: 0;
		has_previous: boolean;
		has_next: boolean;
	};
};

export type PostChurchesRequest = {
	name: string;
	description?: string;
	location?: string;
	communityName?: string;
	crewName?: string;
	communityDivision?: string[];
};

export type PostChurchesResponse = {
	id: number;
	name: string;
	description?: string;
	location?: string;
	community_name?: string;
	community_division?: string[];
};

export type PatchChurchesRequest = {
	name: string;
	description?: string;
	location?: string;
	communityName?: string;
	crewName?: string;
	communityDivision?: string[];
	id: number;
}[];

export type PatchChurchesResponse = {
	id: 0;
	name: string;
	description?: string;
	location?: string;
	community_name?: string;
	community_division?: string[];
}[];

export type DeleteChurchesRequest = {
	ids: number[];
};
