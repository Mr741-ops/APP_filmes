import { useRef } from "react";

export const useScrollButtons = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const smoothScroll = (amount: number) => {
    if (containerRef.current) {
      let start = containerRef.current.scrollLeft; 
      let target = start + amount;                
      let duration = 500; 
      let startTime: number | null = null; 
  
      const animateScroll = (timestamp: number) => {
        if (!startTime) startTime = timestamp; 
        let progress = timestamp - startTime;  
  
        let easeInOutQuad = (t: number) =>
          t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        let percent = easeInOutQuad(progress / duration); 
  
        // Set the new scroll position
        containerRef.current!.scrollLeft = start + (target - start) * percent;
  
        if (progress < duration) {
          requestAnimationFrame(animateScroll); 
        }
      };
  
      requestAnimationFrame(animateScroll); 
    }
  };
  

  return { containerRef, smoothScroll };
};

export default useScrollButtons;


