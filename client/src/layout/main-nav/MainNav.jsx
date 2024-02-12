import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentToken, logOut } from '../../features/auth/authSlice';
import { selectUserUserName, resetProfile } from '../../features/dashboard/dashboardSlice';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/img/argentBankLogo.png';
import './MainNav.scss';

const MainNav = () => {

    const token = useSelector(selectCurrentToken);
    const userName = useSelector(selectUserUserName);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOut());
        dispatch(resetProfile());
    };

    return (
        <nav className="main-nav">

            <NavLink className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            {!token && (
                <NavLink className="main-nav-item" to="/sign-in">
                    <FontAwesomeIcon icon={faCircleUser} />
                    Sign In               
                </NavLink>
            )}

            {token && userName && (
                <div>
                    <NavLink className="main-nav-item" to="/user">
                        <FontAwesomeIcon icon={faCircleUser} />
                        {userName}             
                    </NavLink>

                    <NavLink className="main-nav-item" to="/">
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <button onClick={handleLogout}>Sign Out</button>          
                    </NavLink>
                </div>
            )}

        </nav>
    )
}

export default MainNav;
