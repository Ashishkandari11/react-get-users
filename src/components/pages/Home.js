
import React, { useState, useEffect } from 'react';
import UserCard from '../shared/UserCard';

export default function Home(){
    const [usersdata, setUsers] = useState([]);
    const fetchUserData = () => {
        fetch("https://reqres.in/api/users")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data.data)
        })       
    };

    useEffect(() => {
        fetchUserData()
    }, []);

    return(
        <>
            { usersdata.map((data, index) => 
                <UserCard 
                    key={index} 
                    user={data}
                />) }
        </>
    );
}