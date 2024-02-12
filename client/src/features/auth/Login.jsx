import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import { setCredentials } from './authSlice';
import { setProfile } from '../dashboard/dashboardSlice';
import { useLoginMutation, useProfileMutation } from '../../app/api/apiSlice';

import './Login.scss';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login] = useLoginMutation();
    const [profile] = useProfileMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const loginData = await login({ email, password }).unwrap();
            const token = loginData.body.token;
            dispatch(setCredentials({ accessToken: token }));

            const profileData = await profile().unwrap();
            console.log(profileData);
            dispatch(setProfile({ 
                id: profileData.body.id, 
                firstName: profileData.body.firstName, 
                lastName: profileData.body.lastName, 
                email: profileData.body.email, 
                userName: profileData.body.userName
            }));

            navigate('/user');
            
        } catch (error) {
            console.error('Failed to login:', error);
        }
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon"/>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Username</label>
                        <input
                            type="text"
                            id="email"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                        />
                    </div>
                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default Login;
