import Heading from "../ui/Heading";
import { SkillsData } from "../../data";
import TechGrid from "../ui/TechGrid";

function Skills() {
  return (
    <section className="w-full">
      <Heading variant="SubHeading" className="">
        Technical Skills
      </Heading>
      <TechGrid gridData={SkillsData}></TechGrid>
    </section>
  );
}

export default Skills;
