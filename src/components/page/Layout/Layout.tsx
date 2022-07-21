import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import '../../../assets/css/style.css';
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import '../../global.scss';
import './Layout.scss';
import {useTypedSelector} from "../../../redux/hooks/hooks";
import Loader from "../../common/Loader/Loader";

const Layout: FC = () => {
    const { isLoading } = useTypedSelector(state => state.login);
    return (
        <div className={'wrapper'}>
            <Header />
            {isLoading
                ? <main>
                    <Loader />
                  </main>
                : <Outlet/>}
            <Footer/>
        </div>
    );
};

export default Layout;