import Axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const AXIOS_INSTANCE = Axios.create({ baseURL: '' }); // use your own URL here or environment variable

// const SAMPLE_TOKEN =
// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZXhwIjoxNzQwNTc2OTUzLCJ0eXBlIjoiYWNjZXNzIn0.as8_1nuX2l46mgbHZeVvY9LHgw4Fd53DCbWo4eDHfN8';
// add a second `options` argument here if you want to pass extra options to each generated query
export const customAxios = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
	const source = Axios.CancelToken.source();
	const promise = AXIOS_INSTANCE({
		...config,
		...options,
		headers: {
			...config.headers,
			authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
		},
		cancelToken: source.token,
	}).then(({ data }) => data);

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	promise.cancel = () => {
		source.cancel('Query was cancelled');
	};

	return promise;
};

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = AxiosError<Error>;

export type BodyType<BodyData> = BodyData;
