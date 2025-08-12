import React, { useState } from "react";
import { Card, CardContent, TextField, Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BaseUrl } from "../utils/constants";

const Login = () => {
    const [email, setEmail] = useState("lamine@gmail.com");
    const [password, setPassword] = useState("Anant123@");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(BaseUrl + '/login', {
                email, password
            }, { withCredentials: true })

            console.log(res.data.data)
            dispatch(addUser(res.data.data))
            return navigate('/feed')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                bgcolor: "lightblue"
            }}

        >
            <Card sx={{ width: 350, padding: 2 }}>
                <CardContent>
                    <Typography variant="h5" textAlign="center" gutterBottom>
                        Login
                    </Typography>
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} type="email" fullWidth margin="normal" />
                    <TextField value={password} onChange={(e) => setPassword(e.target.value)} type="password" fullWidth margin="normal" />
                    <Button onClick={handleLogin} variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Login
                    </Button>
                    <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
                        Don’t have an account? <Link to="/signup">Sign Up</Link>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Login;
