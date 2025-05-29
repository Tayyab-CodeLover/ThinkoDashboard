import React from "react";
import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";


function Layout() {
    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '30px' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3, mt:'20px' }}>
                    <Outlet />
                </Box>
            </Box>
        </>
    );
}
export default Layout;