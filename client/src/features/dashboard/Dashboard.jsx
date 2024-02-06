import { useSelector } from 'react-redux';
import { selectUserFirstName, selectUserLastName } from './dashboardSlice';
import Account from './../../components/account/Account';
import './Dashboard.scss';

const Dashboard = () => {

    const firstName = useSelector(selectUserFirstName);
    const lastName = useSelector(selectUserLastName);

    return (
        <main className='main bg-dark'>
            <div className="header">
                <h1>Welcome back<br />{firstName} {lastName}!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
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
