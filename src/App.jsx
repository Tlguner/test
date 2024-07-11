import React, { useState } from "react";
import "./App.css";
import star from "../images/icon-star.svg";
import Rating from "./Rating";
import Result from "./result";

import Thanks from "./thanks";

function App() {
  const [show, setShow] = useState(false);

  const [rating, setRating] = useState(null);

  const [showResult, setShowResult] = useState(true);
  const rt = 5;

  return (
    <div>
      {show ? (
        <Thanks rating={rating} setShow={setShow} />
      ) : (
        <main>
          <div className="card">
            <img className="star" src={star} alt="" />

            <div className="header">
              <h1>How did we do?</h1>
            </div>
            <div className="prag">
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <div>
              <Rating rating={rating} setRating={setRating} />
            </div>
            <div>{/* Conditional rendering based on showResult */}</div>
            <button
              className="submit"
              onClick={() => {
                setShow(!show);
                console.log(show);
              }}
            >
              Submit
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
