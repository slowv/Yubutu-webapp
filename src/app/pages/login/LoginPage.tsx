import {Button} from "antd";
import {useDispatch} from "react-redux";
import {loginSuccess} from "../../store/auth";

export const LoginPage = () => {
	const dispatch = useDispatch();
	const doLogin = () => {
		dispatch(loginSuccess())
	}

	return (
		<div>
			<Button type={'primary'} onClick={doLogin}>Login</Button>
		</div>
	)
}