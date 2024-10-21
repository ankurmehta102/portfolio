import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
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
