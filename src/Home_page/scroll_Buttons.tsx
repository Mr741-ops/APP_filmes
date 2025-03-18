import { useRef } from "react";

export const useScrollButtons = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const smoothScroll = (amount: number) => {
    if (containerRef.current) {
      let start = containerRef.current.scrollLeft;  // Get current scroll position
      let target = start + amount;                 // Calculate target scroll position
      let duration = 500; // Scroll duration in milliseconds
      let startTime: number | null = null; // Stores the animation start time
  
      const animateScroll = (timestamp: number) => {
        if (!startTime) startTime = timestamp; // Capture first timestamp
        let progress = timestamp - startTime;  // How much time has passed?
  
        // Ease-in-out function: starts slow, speeds up, then slows down
        let easeInOutQuad = (t: number) =>
          t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        let percent = easeInOutQuad(progress / duration); // Calculate eased progress
  
        // Set the new scroll position
        containerRef.current!.scrollLeft = start + (target - start) * percent;
  
        if (progress < duration) {
          requestAnimationFrame(animateScroll); // Continue animation
        }
      };
  
      requestAnimationFrame(animateScroll); // Start animation
    }
  };
  

  return { containerRef, smoothScroll };
};

export default useScrollButtons;


