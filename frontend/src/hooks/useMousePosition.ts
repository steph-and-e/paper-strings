import { useState, useEffect } from 'react';

export interface position {
    x: number,
    y: number
}

export default function useMousePosition() { // adding comment as small change to trigger rebuild
    const [mousePosition, setMousePosition] = useState<position>({ x: 0, y: 0 });
  
    useEffect(() => {
        const updateMousePosition = (e : MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
    
        window.addEventListener('mousemove', updateMousePosition);
        
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
  
  return mousePosition;
}