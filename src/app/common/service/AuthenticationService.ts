import {ILoginRequest} from "../model/request/ILoginRequest";
import * as HttpUtils from '../util/HttpUtils'
import {ApiConfig} from "../ApiConfig";
import {IResponse} from "../model/response/IResponse";
import {IAuthState} from "../../store";

export const login = (request: ILoginRequest): Promise<IResponse<IAuthState>> => (
	HttpUtils.get<IResponse<IAuthState>>(ApiConfig.authentication)
)