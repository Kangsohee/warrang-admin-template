import axios from 'axios';
import { IPokemon } from 'pokeapi-typescript';

type Page = {
	limit: number;
	offset: number;
};

type PokemonsResponse = {
	count: number;
	next: string | null;
	previous: string | null;
	results: {
		name: string;
		url: string;
	}[];
};

export const fetchPokemon = async (id: number): Promise<IPokemon> => {
	const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
	return response.data as IPokemon;
};

export const fetchPokemons = ({ limit = 20, offset = 0 }: Page) => {
	return axios
		.get(`https://pokeapi.co/api/v2/pokemon`, { params: { limit, offset } })
		.then((response) => response.data as PokemonsResponse)
		.then(async (response: PokemonsResponse) => {
			const keys = response.results.map((pokemon) => pokemon.url.split('/').slice(-2, -1)[0]);
			const list = await axios.all(keys.map((key) => fetchPokemon(Number(key))));

			const nextPage = response.next ? new URLSearchParams(new URL(response.next).search) : undefined;
			const previousPage = response.previous ? new URLSearchParams(new URL(response.previous).search) : undefined;
			return {
				count: response.count,
				next: nextPage ? { limit: Number(nextPage?.get('limit')), offset: Number(nextPage?.get('offset')) } : undefined,
				previous: previousPage ? { limit: Number(previousPage?.get('limit')), offset: Number(previousPage?.get('offset')) } : undefined,
				results: list,
			};
		});
};
