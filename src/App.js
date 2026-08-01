import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  // ==========================
  // STATES
  // ==========================

  const [count, setCount] = useState(0);

  const [highest, setHighest] = useState(0);

  const [clicks, setClicks] = useState(0);

  const [time, setTime] = useState(new Date());

  // ==========================
  // LIVE CLOCK
  // ==========================

  useEffect(() => {

    const timer = setInterval(() => {

      setTime(new Date());

    },1000);

    return () => clearInterval(timer);

  },[]);

  // ==========================
  // INCREMENT
  // ==========================

  const increment = () => {

    const newCount = count + 1;

    setCount(newCount);

    setClicks(prev => prev + 1);

    if(newCount > highest){

      setHighest(newCount);

    }

  };

  // ==========================
  // DECREMENT
  // ==========================

  const decrement = () => {

    if(count > 0){

      setCount(count - 1);

      setClicks(prev => prev + 1);

    }

  };

  // ==========================
  // RESET
  // ==========================

  const reset = () => {

    setCount(0);

    setClicks(prev => prev + 1);

  };

  // ==========================
  // STATUS MESSAGE
  // ==========================

  let message = "";
  let emoji = "";

  if(count === 0){

    message = "Minimum limit reached";
    emoji = "⚠️";

  }

  else if(count <= 5){

    message = "Nice Start!";
    emoji = "😊";

  }

  else if(count <= 10){

    message = "Keep Going!";
    emoji = "🔥";

  }

  else if(count <= 20){

    message = "Excellent!";
    emoji = "🚀";

  }

  else{

    message = "Counter Master!";
    emoji = "👑";

  }

  const progress = Math.min(count * 10,100);

  // ==========================
  // JSX
  // ==========================

  return (

    <div className="container">

      {/* Floating Background */}

      <div className="blob blob1"></div>

      <div className="blob blob2"></div>

      <div className="blob blob3"></div>

      <div className="card">

        <h1>
          🚀 React Counter
        </h1>

        <p className="subtitle">

          Learn <span>useState</span> Hook

        </p>

        {/* Counter */}

        <div
          className="counter"
          key={count}
        >

          {count}

        </div>

        {/* Progress */}

        <div className="progress">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`
            }}
          ></div>

        </div>

        <p className="percentage">

          Progress : {progress}%

        </p>

        {/* Status */}

        <div className="status">

          <h3>

            {emoji} {message}

          </h3>

        </div>

                {/* Celebration */}

        {count >= 10 && (
          <div className="celebrate">
            🎉 🎉 🎉
          </div>
        )}

        {/* Statistics */}

        <div className="stats">

          <div className="stat-box">

            <h2>{highest}</h2>

            <p>Highest Count</p>

          </div>

          <div className="stat-box">

            <h2>{clicks}</h2>

            <p>Total Clicks</p>

          </div>

        </div>

        {/* Buttons */}

        <div className="buttons">

          <button
            className="increment"
            onClick={increment}
          >
            ➕ Increment
          </button>

          <button
            className="decrement"
            onClick={decrement}
            disabled={count === 0}
          >
            ➖ Decrement
          </button>

          <button
            className="reset"
            onClick={reset}
          >
            🔄 Reset
          </button>

        </div>

        {/* Live Clock */}

        <div className="clock">

          <h3>
            🕒 {time.toLocaleTimeString()}
          </h3>

          <p>
            📅 {time.toLocaleDateString()}
          </p>

        </div>

        {/* Footer */}

        <div className="footer">

          <p>

            Designed & Developed by

            <span> Rupesh K R</span>

          </p>

          <small>

            © 2026 All Rights Reserved.

          </small>

        </div>

      </div>

    </div>

  );

}

export default App;