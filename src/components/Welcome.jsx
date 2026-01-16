import React from 'react';

export default function Welcome() {
  return (
    <div style={{ 
      display: 'flex',           
      flexDirection: 'column',   
      justifyContent: 'center',  
      alignItems: 'center',    
      height: '100vh',           
      textAlign: 'center',
      backgroundColor: '#f0f0f0' 
    }}>
      <h1 style={{ fontSize: '3rem' }}>Time's Up!</h1>
      <p style={{ fontSize: '1.5rem' }}>Welcome to the destination page.</p>
    </div>
  );
}