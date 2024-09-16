import {useEffect, useMemo, useState} from "react";
import {axiosInstance} from "../common/util/HttpUtils";

export const useAxiosLoader = () => {
	const [counter, setCounter] = useState(0);

	const interceptors = useMemo(() => {
		const inc = () => setCounter(counter => counter + 1);
		const dec = () => setCounter(counter => counter - 1);

		return ({
			request: (config: any) => (inc(), config),
			response: (response: any) => (dec(), response),
			error: (error: any) => (dec(), Promise.reject(error)),
		});
	}, []);

	useEffect(() => {
		const reqInterceptor = axiosInstance.interceptors.request.use(interceptors.request, interceptors.error);
		const resInterceptor = axiosInstance.interceptors.response.use(interceptors.response, interceptors.error);

		return () => {
			axiosInstance.interceptors.request.eject(reqInterceptor);
			axiosInstance.interceptors.response.eject(resInterceptor);
		};
	}, [interceptors]);

	return [counter > 0];
}