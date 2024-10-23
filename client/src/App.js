import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [door, setDoor] = useState({});

  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:5000")
        .then((res) => res.json())
        .then((data) => setDoor(data))
        .catch((err) => console.error(err));
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => setDoor({ status: false }), 20000);
  }, [door]);

  return (
    <div className={door.status ? "door-status-true" : "door-status-false"}>
      <p>{door.status ? "Someone is at the door" : "No one is at the door"}</p>
    </div>
  );
}

export default App;
