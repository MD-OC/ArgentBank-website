import { useDispatch, useSelector } from 'react-redux';

import { selectUserFirstName, selectUserLastName } from './dashboardSlice';
import { selectIsUserEditVisible, showUserEdit } from '../user-edit/userEditSlice';

import Edit from '../user-edit/UserEdit'
import Account from '../../components/account/Account';
import './Dashboard.scss';

const Dashboard = () => {

    const dispatch = useDispatch();

    const firstName = useSelector(selectUserFirstName);
    const lastName = useSelector(selectUserLastName);
    const toggleEdit = useSelector(selectIsUserEditVisible);

    const handleEdit = () => {
        dispatch(showUserEdit());
    };

    return (
        <main className='main bg-dark'>

            {!toggleEdit ?
                <div className="header">
                    <h1>Welcome back<br />{firstName} {lastName}!</h1>
                    <button className="edit-button" onClick={handleEdit}>Edit Name</button>
                </div> :
                <Edit />
            }
            <h2 className="sr-only">Accounts</h2>

            <Account 
                account="Argent Bank Checking (x8349)"
                balance="$2,082.79"
            />
            <Account 
                account="Argent Bank Savings (x6712)"
                balance="$10,928.42"
            />
            <Account 
                account="Argent Bank Credit Card (x8349)"
                balance="$184.30"
            />

        </main>
    )
}

export default Dashboard;
