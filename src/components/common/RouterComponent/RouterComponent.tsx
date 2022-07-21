import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../../page/Layout/Layout";
import {privateRoutes, publicRoutes} from "../../../Router/Routes";
import {useTypedSelector} from "../../../redux/hooks/hooks";

const RouterComponent:FC = () => {
    const {token} = useTypedSelector(state => state.login);
    return (
        <div className="markup">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        {token
                            ? privateRoutes.map(route => route.index
                                ? <Route key='index' index element={route.element}/>
                                : <Route key={route.path} path={route.path} element={route.element}/>)
                            : publicRoutes.map(route => route.index
                                ? <Route key='index' index element={route.element}/>
                                : <Route key={route.path} path={route.path} element={route.element}/>)
                        }
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default RouterComponent;