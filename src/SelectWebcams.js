
import React from "react";
import { useEffect, useState } from 'react';
import ParkNameCodePairs from "./ParkNameCodePairs";
import "./index.css";

export default function SelecteWebcam() {
    const [checkedState, setCheckedState] = useState(
        new Array(ParkNameCodePairs.length).fill(false)
    );

    const [total, setTotal] = useState(0);

    const handleOnChange = (position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );
  
      setCheckedState(updatedCheckedState);
  
      const totalPrice = updatedCheckedState.reduce(
        0
      );
  
      setTotal(totalPrice);
    };
  
    return (
      <div className="SelecteWebcam">
        <h3>Select Park Webcams</h3>
        <ul className="park-details">
          {ParkNameCodePairs.map(({ fullName, parkCode }, index) => {
            return (
              <li key={index}>
                <div className="park-details">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={fullName}
                      value={parkCode}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{SelecteWebcam}</label>
                  </div>
                  
                </div>
              </li>
            );
          })}
          <li>
            <div className="park-details">
              <div className="left-section">Total:</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
  