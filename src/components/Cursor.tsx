import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseDown = () => {
      cursorRef.current?.classList.add('smack');
    };

    const handleMouseUp = () => {
      cursorRef.current?.classList.remove('smack');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return <div id="slipper-cursor" ref={cursorRef}>🩴</div>;
}
