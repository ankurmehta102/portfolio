import Heading from "../ui/Heading";
import { SkillsData } from "../../data";

function Skills() {
  return (
    <section className="mb-3 mt-10 px-3">
      <Heading variant="SubHeading">Technical Skills</Heading>
      <div
        id="skills-icons"
        className="mt-4 grid grid-cols-3 grid-rows-3 gap-x-0 gap-y-4 laptop:grid-cols-4"
      >
        {SkillsData.map((skill) => {
          return (
            <div className={`${skill.className} flex cursor-default text-grey`}>
              {<skill.icon size={skill.iconSize} />}
              <div className="ml-2 flex items-center">
                <p className="text-sm font-medium leading-height-2 tracking-wide laptop:text-xl">
                  {skill.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
