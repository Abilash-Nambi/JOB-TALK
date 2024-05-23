import { animateScroll } from "react-scroll";

const useScrollToTop = () => {
  animateScroll.scrollToTop({
    duration: 1000, // Adjust the duration (in milliseconds) to control the scroll animation speed
    smooth: "easeInOutQuart", // Adjust the easing function for the scroll animation
  });
};

export default useScrollToTop;
