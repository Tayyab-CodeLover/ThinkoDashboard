import React from 'react';

const testData = [
    { id: 1, name: 'Alice', score: 92 },
    { id: 2, name: 'Bob', score: 85 },
    { id: 3, name: 'Charlie', score: 78 },
];

const Test = () => (
    <div style={{color:"white", display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', justifyContent: 'center'}}>
        <h1>Test Component</h1>
        <p>This is a simple test component to display user data.</p>
        <h2>Test Data</h2>
        <ul>
            {testData.map(user => (
                <li key={user.id} style={{color:"white"}}>
                    {user.name}: {user.score}
                </li>
            ))}
        </ul>
    </div>
);

export default Test;