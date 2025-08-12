import React from "react";
import { Card, CardContent, TextField, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bgcolor="#f5f5f5"
        >
            <Card sx={{ width: 350, padding: 2 }}>
                <CardContent>
                    <Typography variant="h5" textAlign="center" gutterBottom>
                        Sign Up
                    </Typography>
                    <TextField label="Name" fullWidth margin="normal" />
                    <TextField label="Email" type="email" fullWidth margin="normal" />
                    <TextField label="Password" type="password" fullWidth margin="normal" />
                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Sign Up
                    </Button>
                    <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
                        Already have an account? <Link to="/">Login</Link>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Signup;
