import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      navigate("/welcome");
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, navigate]);

  return (
    <div style={{ 
      display: 'flex',          
      flexDirection: 'column',   
      justifyContent: 'center',  
      alignItems: 'center',    
      height: '100vh',          
      textAlign: 'center' 
    }}>
      <h1>COUNTDOWN</h1>
      <h2 style={{ fontSize: '5rem', color: 'red', margin: '20px 0' }}>
        {count}
      </h2>
    </div>
  );
}