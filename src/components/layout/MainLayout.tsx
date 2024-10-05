import React from "react";
// import Footer from "../section/Footer";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full justify-center py-6">
      <div className="flex w-full max-w-[740px] flex-col items-center justify-start px-1">
        {children}

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default MainLayout;
