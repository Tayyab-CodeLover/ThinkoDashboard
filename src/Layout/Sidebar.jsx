import React from "react";

function Sidebar() {
    return (
<>
        <div style={{ width: '200px', height: '100vh', backgroundColor: '#1976d2', padding: '20px' }}>
            <h2>Sidebar</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/calender">Calender</a></li>
                <li><a href="/barchart">Bar Chart</a></li>
                <li><a href="/tasks">Tasks</a></li>
                <li><a href="/timeline">Timeline</a></li>
                <li><a href="/setting">Setting</a></li>
                <li><a href="/book">Book</a></li>
            </ul>
        </div>
</>
    );
}
export default Sidebar;