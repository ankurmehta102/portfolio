import Header from "../components/section/Header";
import Bio from "../components/section/Bio";
import Projects from "../components/section/Projects";
import Skills from "../components/section/Skills";

function HomePage() {
  return (
    <div className="space-y-16 ">
      <Header />
      <Bio />
      <Projects />
      <Skills />
    </div>
  );
}

export default HomePage;
