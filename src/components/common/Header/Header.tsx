import React, {FC, useMemo} from 'react';
import briefcase from "../../../assets/images/briefcase.svg";
import profileIcon from "../../../assets/images/user.svg";
import {Link, useLocation, useNavigate} from "react-router-dom";
import './Header.scss'
import {useTypedDispatch, useTypedSelector} from "../../../redux/hooks/hooks";
import {logOutAction} from "../../../redux/actions/login/logOutAction";

interface IProps {
}

const Header: FC<IProps> = ({}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useTypedDispatch();
    const { user } = useTypedSelector(state => state.login);
    const isPublicRoute: boolean = useMemo(() => {
        return location.pathname === '/sign-in' || location.pathname === '/sign-up'
    }, [location]);
    const logOut = (): void => {
        localStorage.removeItem('token');
        dispatch(logOutAction());
        navigate('/sign-in', {replace: true});
    }
    return (
        <header className="header">
            <div className="header__inner">
                <Link to="/" className="header__logo">Travel App</Link>
                <nav className="header__nav">
                    {!isPublicRoute &&
                        (<ul className="nav-header__list">
                            <li className="nav-header__item" title="Bookings">
                                <Link to="/bookings" className="nav-header__inner">
                                    <span className="visually-hidden">Bookings</span>
                                    <img src={briefcase} alt=" icon"/>
                                </Link>
                            </li>
                            <li className="nav-header__item" title="Profile">
                                <div className="nav-header__inner profile-nav" tabIndex={0}>
                                    <span className="visually-hidden">Profile</span>
                                    <img src={profileIcon} alt="profile icon"/>
                                    <ul className="profile-nav__list">
                                        <li className="profile-nav__item profile-nav__username">{user?.fullName}</li>
                                        <li className="profile-nav__item">
                                            <button onClick={logOut} className="profile-nav__sign-out button">
                                                Sign Out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>)
                    }
                </nav>
            </div>
        </header>
    );
};

export default Header;