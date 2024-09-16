import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import viVN from "antd/es/locale/vi_VN";
import reportWebVitals from './reportWebVitals';
import {ConfigProvider} from "antd";
import {Provider} from "react-redux";
import {store} from "./app/store";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoadingComponent} from "./app/common/component/layout/loading/LoadingComponent";
import {AxiosInit} from "./app/core/AxiosInit";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ConfigProvider
			locale={viVN}
			theme={{
				cssVar: true,
				token: {
					colorBgContainer: '#fff',
					colorPrimary: '#00b96b',
				}
			}}
		>
			<Provider store={store}>
				<PersistGate loading={<LoadingComponent/>} persistor={persistStore(store)}>
					<BrowserRouter>
						<Routes>
							<Route path={'/*'} element={<App/>}/>
						</Routes>
					</BrowserRouter>
				</PersistGate>
			</Provider>

			{/*Loading*/}
			<AxiosInit/>
		</ConfigProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
