import React, { useState, useEffect } from 'react';
import './CurrentTime.css'

function CurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div className='current-time'>현재 시간: {time}</div>;
}

export default CurrentTime;