import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Context/authContext'
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loader/Loader';




const PrivateRoutes = () => {

    const [auth] = useAuth();
    const [reserved,setReserved] = useState(false);

    useEffect(()=>{
        const authVerify = async () =>{
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`);
            res.data.isProtected?
            setReserved(true) : setReserved(false);

        }
        if(auth?.token) authVerify();

    },[auth?.token])


    return reserved ? <Outlet/> : <Loader/>
}

export default PrivateRoutes