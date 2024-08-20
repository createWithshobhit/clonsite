// src/components/ScrollContainer.jsx
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const ScrollContainer = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}  {/* Render children components inside the scroll container */}
    </div>
  );
};

export default ScrollContainer;
