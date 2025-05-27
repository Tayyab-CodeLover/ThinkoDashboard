import { Box } from "@mui/material";
import React from "react";

const Navbar = () => {
    return(
        <>
        <Box sx={{width: '100%', height: '60px', backgroundColor: '#1976d2', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px'}}>
            <Box sx={{ color: '#fff', fontSize: '24px' }}>
                My Application
            </Box>
            <Box sx={{ color: '#fff', display: 'flex', gap: '20px' }}>
                <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
                <a href="/products" style={{ color: '#fff', textDecoration: 'none' }}>Products</a>
                <a href="/calender" style={{ color: '#fff', textDecoration: 'none' }}>Calender</a>
                <a href="/barchart" style={{ color: '#fff', textDecoration: 'none' }}>Bar Chart</a>
                <a href="/tasks" style={{ color: '#fff', textDecoration: 'none' }}>Tasks</a>
                <a href="/timeline" style={{ color: '#fff', textDecoration: 'none' }}>Timeline</a>
                <a href="/setting" style={{ color: '#fff', textDecoration: 'none' }}>Setting</a>
                <a href="/book" style={{ color: '#fff', textDecoration: 'none' }}>Book</a>
            </Box>

        </Box>
        </>
    );
}
export default Navbar;