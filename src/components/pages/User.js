
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserCard from '../shared/UserCard';
import Loader from '../shared/Loader';


export default function User(){

    const { userId } = useParams();
    const [usersdata, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);    
    const fetchUserData = () => {
        setIsLoading(true);
        fetch("https://reqres.in/api/users/"+userId)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data.data);
            setTimeout(() => {
                setIsLoading(false);         
            }, 1000);
        })
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    if(isLoading){
        return(
            <>
                 <Loader />
            </>
        );
    }else{       
        return(
            <>               
                <UserCard user={usersdata} />              
            </>
         );
    }
}