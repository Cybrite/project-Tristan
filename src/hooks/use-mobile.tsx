import * as React from "react";
import { BREAKPOINTS } from "@/lib/constants";

/**
 * Hook to determine if the current viewport is mobile-sized
 * @returns {boolean} True if the viewport is narrower than the mobile breakpoint
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth < BREAKPOINTS.mobile);

    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS.mobile - 1}px)`);
    mql.addEventListener("change", checkMobile);

    checkMobile();

    return () => mql.removeEventListener("change", checkMobile);
  }, []);

  return isMobile;
}
