import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const [drawerOpen , setDarwerOpen] = useState(false);

function Layout(){
    return (
        <>
        <Navbar />
        <Sidebar />
        </>
    );
}
export default Layout;