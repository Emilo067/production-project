import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<h1>Loading</h1>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => {
                    return <Route key={path} path={path} element={<div className={'page-wrapper'}>{element}</div>}/>
                })}
            </Routes>
        </Suspense>
    );
};