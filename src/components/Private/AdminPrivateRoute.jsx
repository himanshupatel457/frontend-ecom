import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Context/authContext'
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loader/Loader';




const AdminPrivateRoute = () => {

    const [auth,setAuth] = useAuth();
    const [reserved,setReserved] = useState(false);

    useEffect(()=>{
        try{
            const authVerify = async () =>{
                const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/admin-auth`);
                // console.log(res);
                res.data.isProtected?
                setReserved(true) : setReserved(false);
    
            }
            if(auth?.token) authVerify();
        }
        catch(err){
            console.log(err);
        }

    },[auth?.token])


    return reserved ? <Outlet/> : <Loader path=''/>
}

export default AdminPrivateRoute;