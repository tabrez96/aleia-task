import { useState, useEffect } from "react";

const getPortWidth = () => {
  const viewPortWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  return viewPortWidth;
};

/**
 * Hook to get current breakpoint when window is resized
 */
const useBreakpoint = () => {
  const [viewPortWidth, setviewPortWidth] = useState(getPortWidth);

  const handleResize = () => {
    setviewPortWidth(getPortWidth());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let view;

  if (viewPortWidth >= 1024) {
    view = "desktop";
  } else if (viewPortWidth >= 600) {
    view = "tablet";
  } else {
    view = "mobile";
  }

  return view;
};

export default useBreakpoint;
export { useBreakpoint };
