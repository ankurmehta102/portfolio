import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

function MainLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: `${location.pathname}` });
  }, [location.pathname]);
  return (
    <div className="flex min-h-screen w-full justify-center   bg-rg-background px-1 py-6 laptop:px-0 ">
      <div className="flex w-full max-w-[740px] flex-col items-center justify-start px-1 ">
        {children}

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default MainLayout;
