import {useEffect} from "react";
import {axiosInstance} from "../common/util/HttpUtils";

export const AxiosInit = (props: any) => {
	useEffect(() => {
		const initAxios = axiosInstance;
	}, []);

	return (<></>);
}