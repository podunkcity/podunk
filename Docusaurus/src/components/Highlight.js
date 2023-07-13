import React from 'react';

export default function Highlight({children, color}) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
}

// ZCZC
// REV01: Fri 02 Jun 2023 17:00
// START: Wed 31 May 2023 13:00

