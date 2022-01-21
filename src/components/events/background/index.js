import './index.scss';
import React, { useEffect, useRef, useState } from 'react';


function Background() {

  const [count, setCount] = useState(0)
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const ref = useRef();
  const previousTimeRef = useRef();

  const animate = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;

      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      setCount(prevCount => (prevCount + deltaTime * 0.05));
    }
    previousTimeRef.current = time;
    ref.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    ref.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(ref.current);
  }, []); // Make sure the effect runs only once

  useEffect(() => {
    document.documentElement.style.setProperty('--direction', Math.round(count) + 'deg');
  }, [count]); // Make sure the effect runs only once


  return (
    <div className="background" ref={ref}>
      <div>{count}</div>
      <div className="background_content background__background"></div>
      <div className="background_content background__foreground" style={{
        overflowScrolling: "touch",
        WebkitOverflowScrolling: "touch",
        maskImage: `linear-gradient(var(${Math.round(count)}), rgba(0,0,0,1) 40%, rgba(0,0,0,0) 60%)`,
        WebkitMaskImage: `linear-gradient(var(${Math.round(count)}), rgba(0,0,0,1) 40%, rgba(0,0,0,0) 60%)`,
        maskPosition: '50% 50%',
        WebkitMaskPosition: '50% 50%'
      }}></div>
    </div>
  )
}

export default Background;
