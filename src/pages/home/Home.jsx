import React from 'react'
import { useNavigate } from 'react-router'
import { useCallback } from 'react';

const Home = () => {
    const navigate = useNavigate();
  
    const handleClick = useCallback(() => {
      navigate("/corazon", {
        state: { userData: { displayName: "el lchavo" } },
      });
    }, [navigate]);
  
    return (
      <div>
        <h1>Inicio</h1> 
        <button onClick={handleClick}>Ver más enfermedades</button>
      </div>
    );
  };

export default Home