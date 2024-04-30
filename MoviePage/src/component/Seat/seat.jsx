// Seat.js
import React from 'react';
import './style.css';
import DisabledContext from 'antd/es/config-provider/DisabledContext';

const Seat = ({ seat, selected,booked, onClick }) => {
  return (
    <div className={`seat ${ selected ? 'selected' : ''}`} onClick={onClick}>
      {seat.seatNumber}
    </div>
  );
};

export default Seat;
