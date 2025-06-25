module.exports = {
	'grace-talk': {
		output: {
			mode: 'tags-split',
			target: 'src/apis/grace-talk/endpoints',
			schemas: 'src/apis/grace-talk/types',
			client: 'react-query',
			prettier: true,
			override: {
				title: () => '',
				mutator: {
					path: './src/apis/grace-talk/custom-axios.ts',
					name: 'customAxios',
				},
			},
		},
		input: './open-api/input.json',
	}
}
