import React from "react";
import Footer from "../section/Footer";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full justify-center  pt-10">
      <div className="flex w-full max-w-[740px] flex-col items-center justify-center">
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
