import {IAppState, IAuthState} from "./index";
import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IAuthState = {
	role: [],
	email: '',
	firstName: '',
	lastName: '',
	userName: '',
	avatar: '',
	createdDate: '',
	status: '',
	phoneNumber: '',
	isAuthenticated: true,
	accountNumber: '',
	address: '',
	languageCode: '',
	userId: '',
	keycloakId: '',
	access_token: '',
	expires_in: 0,
	expires_at: '',
	// not_before_policy: 0,
	refresh_expires_in: 0,
	refresh_token: '',
	// scope: '',
	// session_state: '',
	// token_type: '',
}

const authReducer = createSlice({
	name: 'user',
	initialState,
	reducers: {
		updateRole(state: IAuthState, action: PayloadAction<any>) {
			state.role = action.payload
		},
		logOut() {
			return initialState
		},
		loginSuccess(state: IAuthState) {
			state.isAuthenticated = true
		}
	}
})

const rootState = (state: IAppState) => state.auth;

export const getRole = createSelector(rootState, (state: IAuthState) => state.role || []);
export const getAccessToken = createSelector(rootState, (state: IAuthState) => state.access_token);
export const isUserAuthenticated = createSelector(rootState, (state: IAuthState) => state.isAuthenticated)

export const {
	updateRole,
	logOut,
	loginSuccess
} = authReducer.actions;

export default authReducer