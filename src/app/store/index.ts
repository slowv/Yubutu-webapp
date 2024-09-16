import {PersistConfig, persistReducer} from 'redux-persist'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import {combineReducers} from "redux";
import authReducer from "./auth";
import {thunk} from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {IUserLogin} from "../common/model/user.model";
import localStorage from 'redux-persist/lib/storage'

export interface IAuthState extends IUserLogin {
	role: any[]
	email: string
	firstName: string
	lastName: string
	userName: string
	avatar: string
	isAuthenticated: boolean
	createdDate: string
	status: string
	phoneNumber: string
	accountNumber: string
	address: string
	languageCode: string
	userId: string
	keycloakId: string
}

export interface IAppState {
	auth: IAuthState
}

const persistConfig: PersistConfig<IAppState> = {
	key: 'root',
	storage: localStorage,
	blacklist: [],
	stateReconciler: autoMergeLevel2
}

const rootReducers = combineReducers({
	auth: authReducer.reducer
})

export const store = configureStore({
	reducer: persistReducer(persistConfig, rootReducers),
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(thunk),
})