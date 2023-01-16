import React from 'react';
import './NumberDisplay.css';

interface NumberDisplayProps {
  value: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ value }) => {

  return (
    <div className="numberDisplay">{value.toString().padStart(3, '000')}</div>
  )
}

export default NumberDisplay