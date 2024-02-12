import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserFirstName, selectUserLastName, selectUserUserName, updateUsername } from '../dashboard/dashboardSlice';
import { hideUserEdit } from './userEditSlice';
import { useUpdateProfileMutation } from '../../app/api/apiSlice';

import './UserEdit.scss'

const UserEdit = () => {

    const dispatch = useDispatch();

    const firstName = useSelector(selectUserFirstName);
    const lastName = useSelector(selectUserLastName);
    const userName = useSelector(selectUserUserName);

    const [userNameInput, setUserNameInput] = useState(userName);

    const [updateProfile] = useUpdateProfileMutation();

    const handleUserNameChange = (e) => {
        setUserNameInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(updateUsername({ userName: userNameInput }));

        try {
            const profileData = await updateProfile({ userName: userNameInput });
            console.log(profileData);
            dispatch(hideUserEdit());

        } catch (error) {
            console.error('Failed to update profile:', error);
        }

    }

    const handleCancel = () => {
        dispatch(hideUserEdit());
    }

    return (
        <div className='user-edit'>
            <h2 className='user-edit__title'>Edit user info</h2>
            <form onSubmit={handleSubmit} className='user-edit__form'>
                <div className="user-edit__form-group">
                    <label htmlFor="user-name" className='user-edit__label'>User name:</label>
                    <input
                        type="text"
                        id="user-name"
                        className='user-edit__input'
                        value={userNameInput}
                        onChange={handleUserNameChange}
                    />
                </div>
                <div className="user-edit__form-group">
                    <label htmlFor="first-name" className='user-edit__label'>First name:</label>
                    <input
                        type="text"
                        id="first-name"
                        className='user-edit__input'
                        defaultValue={firstName}
                        readOnly
                    />
                </div>
                <div className="user-edit__form-group">
                    <label htmlFor="last-name" className='user-edit__label'>Last name:</label>
                    <input
                        type="text"
                        id="last-name"
                        className='user-edit__input'
                        defaultValue={lastName}
                        readOnly
                    />
                </div>
                <div className="user-edit__buttons">
                    <button type="submit" className="user-edit__button">Save</button>
                    <button type="button" className="user-edit__button" onClick={handleCancel}>Cancel</button>
                </div>             
            </form>
        </div>
    )
}

export default UserEdit;
