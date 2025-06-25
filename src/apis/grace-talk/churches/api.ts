import { customAxios } from '../custom-axios';
import {
	DeleteChurchesRequest,
	GetChurchesRequest,
	GetChurchesResponse,
	PatchChurchesRequest,
	PatchChurchesResponse,
	PostChurchesRequest,
	PostChurchesResponse,
} from './types';

export const getChurches = async (params: GetChurchesRequest): Promise<GetChurchesResponse> => {
	console.log('Hello');
	const response = await customAxios<GetChurchesResponse>({
		method: 'get',
		url: '/api/v1/churches',
		params,
	});
	return response;
};

export const postChurches = async (data: PostChurchesRequest): Promise<PostChurchesResponse> => {
	const response = await customAxios<PostChurchesResponse>({
		method: 'post',
		url: '/api/v1/churches',
		data,
	});

	return response;
};
export const patchChurches = async (data: PatchChurchesRequest): Promise<PatchChurchesResponse> => {
	const response = await customAxios<PatchChurchesResponse>({
		method: 'patch',
		url: '/api/v1/churches',
		data,
	});

	return response;
};

export const deleteChurches = async (data: DeleteChurchesRequest): Promise<void> => {
	await customAxios({
		method: 'delete',
		url: '/api/v1/churches',
		data,
	});
};
