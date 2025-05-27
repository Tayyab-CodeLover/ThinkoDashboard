import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";


function Layout(){
    return (
        <>
        
        <Navbar />
        <Box sx={{display:"flex"}}>
        <Box sx={{width:"15%"}}>
        <Sidebar />
        </Box>
        <Box sx={{width:"85%", marginLeft:"50px"}}>
        <Outlet />
        </Box>
        </Box>
        </>
    );
}
export default Layout;