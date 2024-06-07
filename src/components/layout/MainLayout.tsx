import React from "react";
import Footer from "../section/Footer";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full justify-center pt-6">
      <div className="flex w-full max-w-[740px] flex-col items-center justify-center">
        <div className="min-h-[calc(100%-73px)] ">{children}</div>

        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
