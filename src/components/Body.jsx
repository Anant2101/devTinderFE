import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router'
import NavBar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { BaseUrl } from '../utils/constants'
import { addUser } from '../utils/userSlice'
import appStore from '../utils/appStore'

const Body = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const userData = useSelector((store) => store.user)

    console.log("sjkjskdjks",userData)
    const fetchData = async () => {
        if (userData) return;
        try {
            const res = await axios.get(BaseUrl + "/profile/view", {
                withCredentials: true
            });
            console.log(res.data)
            dispatch(addUser(res.data.data))
        } catch (error) {
            if (error.status == 401) {
                Navigate('/login')
            }
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Body
