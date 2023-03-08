import React, {
  Children,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useIntersection } from "react-use";

export const IntersectionContext = createContext();

const IntersectionObserver = ({
  children,
  reset = false, // if value set to true - observed element will reappear every time it shows up on the screen
}) => {
  const [inView, setInView] = useState(false);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    } else if (reset) {
      return setInView(false);
    }
  }, [intersection, reset]);

  return (
    <IntersectionContext.Provider value={{ inView }}>
      <div ref={intersectionRef}>{children}</div>
    </IntersectionContext.Provider>
  );
};

export default IntersectionObserver;
