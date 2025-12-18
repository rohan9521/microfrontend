import React from 'react';
export const Progress = () => {

  return (
    <div style={{ height: '4px', width: '100%', backgroundColor: '#f3f3f3' }}>
      <div
        style={{
          height: '100%',
          width: '50%',
          backgroundColor: '#4caf50',
          animation: 'progress-animation 2s infinite'
        }}
      ></div>
      <style>
        {`
          @keyframes progress-animation {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(0); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
};

export default Progress;