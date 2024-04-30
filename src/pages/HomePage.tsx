import Header from "../components/Header";
import Bio from "../components/Bio";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="flex w-full justify-center py-10">
      <div className="flex w-full max-w-[740px] flex-col items-center justify-center">
        <Header />
        <Bio />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
