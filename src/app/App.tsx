import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomeComponent} from "./common/component/home/HomeComponent";
import {NotFoundPage} from "./pages/not-found/NotFoundPage";
import {PublicRoute} from "./core/PublicRoute";
import {LoginPage} from "./pages/login/LoginPage";
import {AuthRoute} from "./core/AuthRoute";
import {DashboardPage} from "./pages/dashboard/DashboardPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomeComponent/>}/>

			<Route path={'admin'}>
				<Route element={<PublicRoute/>}>
					<Route path={'/admin/login'} element={<LoginPage/>}/>
				</Route>
				<Route element={<AuthRoute/>}>
					<Route path={'app'} element={<DashboardPage/>}/>
				</Route>
			</Route>

			<Route path={'*'} element={<NotFoundPage/>}/>
		</Routes>
	)
}

export default App;
