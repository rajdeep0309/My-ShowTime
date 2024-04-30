// SeatSelection.js
import React, { useState } from "react";
// import Seat from './Seat';
import Seat from "./seat.jsx";
import "./style.css";

const SeatSelection = () => {
  // Dummy seat data
  const priceA=100;
  const priceB=120;
  const priceC=150;
  const priceD=200;
  const seatAData = [
    ...Array.from({ length: 17 }, (_, i) => ({
      id:'A'+ i + 1,
      seatNumber: `A${i + 1}`,
      booked: false,
    })),
    // Add more seats as needed
  ];
  const seatBData = [
    ...Array.from({ length: 17 }, (_, i) => ({
      id:'B'+ i + 1,
      seatNumber: `B${i + 1}`,
      booked: false,
    })),
    // Add more seats as needed
  ];
  const seatCData = [
    ...Array.from({ length: 17 }, (_, i) => ({
      id:'C'+ i + 1,
      seatNumber: `C${i + 1}`,
      booked: false,
    })),
    // Add more seats as needed
  ];
  const seatDData = [
    ...Array.from({ length: 17 }, (_, i) => ({
      id:'D'+ i + 1,
      seatNumber: `D${i + 1}`,
      booked: false,
    })),
    // Add more seats as needed
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState(false);
  const [price, setPrice] = useState(0);

  const handleSeatClick = (seatId,price) => {
    // Toggle seat selection
    if (selectedSeats.includes(seatId)) {
      console.log("sid:",seatId[0]);

      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
      console.log("before removed",price);
      if(seatId[0]==='A'){
        setPrice(price=price-100);

      }
      else if(seatId[0]==='B'){
        setPrice(price=price-120);
      }
      else if(seatId[0]==='C'){
        setPrice(price=price-150);
      }
      else if(seatId[0]==='D'){
        setPrice(price=price-200);
      }
      // setPrice(price=price-100);
      console.log("Seat removed",price);
      // setPrice(price+100);
    } else {
      setSelectedSeats([...selectedSeats, seatId]);

      if(seatId[0]==='A'){
        setPrice(price=price+100);

      }
      else if(seatId[0]==='B'){
        setPrice(price=price+120);
      }
      else if(seatId[0]==='C'){
        setPrice(price=price+150);
      }
      else if(seatId[0]==='D'){
        setPrice(price=price+200);
      }
      // setPrice(price=price+100);
      console.log("Seat selected",price);
    }
  };

  return (
    <div className="main">
      <h2>Seat Selection</h2>
      <div className="seat-container">
        <div className="seatSection">
          <h1>Seat A(Rs:100)</h1>
          <div className="seatName">
            {seatAData.map((seat) => (
              <Seat
                key={seat.id}
                seat={seat}
                price={price}
                booked={bookedSeats}
                selected={selectedSeats.includes(seat.id)}
                onClick={() => handleSeatClick(seat.id,price)}
              />
            ))}
          </div>
        </div>


        <div className="seatSection">
          <h1>Seat B(Rs:120)</h1>
          <div className="seatName">
            {seatBData.map((seat) => (
              <Seat
                key={seat.id}
                seat={seat}
                price={price}
                selected={selectedSeats.includes(seat.id)}
                onClick={() => handleSeatClick(seat.id,price)}
              />
            ))}
          </div>
        </div>

        <div className="seatSection">
          <h1>Seat C(Rs:150)</h1>
          <div className="seatName">
            {seatCData.map((seat) => (
              <Seat
                key={seat.id}
                seat={seat}
                price={price}
                selected={selectedSeats.includes(seat.id)}
                onClick={() => handleSeatClick(seat.id,price)}
              />
            ))}
          </div>
        </div>

        <div className="seatSection">
          <h1>Seat D(Rs:200)</h1>
          <div className="seatName">
            {seatDData.map((seat) => (
              <Seat
                key={seat.id}
                seat={seat}
                price={price}
                selected={selectedSeats.includes(seat.id)}
                onClick={() => handleSeatClick(seat.id,price)}
              />
            ))}
          </div>
        </div>
      </div>
      <button onClick={() => console.log("Selected Seats:", selectedSeats,"Total Price:",price)}>
        Confirm Selection
      </button>
    </div>
  );
};

export default SeatSelection;
