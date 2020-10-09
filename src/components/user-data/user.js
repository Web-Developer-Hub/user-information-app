import React from 'react';
import './user.css';


const User = (props) => {
const {id, name, email, gender, phone, address, salary, img, jobe} = props.account;
const handleUser = props.handleUser;

    return (
        <div className = 'container'>
             <div className = 'picture'>
                <img src={img} alt=""/>

            </div>

            <div className = 'information'>
                <h2>User Information Here 😃</h2>
                <h3>ID : {id}</h3>
                <h3 className = 'contant'>Name : {name}</h3>
                <h3>Email : {email}</h3>
                <h3>Phone : {phone}</h3>
                <h3>Address : {address}</h3>
                <h3>Gender : {gender}</h3>
                <h3>Jobe : {jobe}</h3>
                <h3>Salary : {salary}</h3>
                <button onClick = {() => handleUser(handleUser)}>Add User</button>
            </div>
           
        </div>
    );
};

export default User;