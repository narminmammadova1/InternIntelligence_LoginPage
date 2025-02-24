import React, { useState, useEffect } from 'react';

const FallingAnimation = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let animationFrameId:number

    const animate = () => {
      setPosition(prevPosition => (prevPosition + 1) % window.innerHeight); 
      animationFrameId = requestAnimationFrame(animate);
    };

    animate(); 

    return () => cancelAnimationFrame(animationFrameId); 
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div 
        style={{
          position: 'absolute',
          top: `${position}px`, 
          left: '50%',
          transform: 'translateX(-50%)', 
          width: '200px',
          height: '200px',
          backgroundColor: '#a54343',
          borderRadius: '50%',
        }}
        
   className=' flex justify-center items-center'   ><h1 className='text-white  font-bold text-4xl '>Welcome</h1></div>
    </div>
  );
};

export default FallingAnimation;
