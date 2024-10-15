import Header from "../components/section/Header";
import Bio from "../components/section/Bio";
import Projects from "../components/section/Projects";
import Skills from "../components/section/Skills";
import Footer from "../components/section/Footer";

function HomePage() {
  return (
    <div className="space-y-16 ">
      <Header />
      <Bio />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default HomePage;
