import Heading from "../ui/Heading";
import { SkillsData } from "../../data";

function Skills() {
  return (
    <section className="w-full">
      <Heading variant="SubHeading" className="">
        Technical Skills
      </Heading>
      <div id="skills-icons" className="mt-2 grid grid-cols-3  gap-2">
        {SkillsData.map((skill) => {
          return (
            <div
              className={`${skill.className} flex cursor-default flex-col items-center justify-center rounded-md border border-border bg-background-secondary py-6 text-grey transition duration-200`}
            >
              {<skill.icon size={skill.iconSize} />}
              <div className=" flex items-center">
                <p className="mt-2 text-sm font-medium leading-height-2 tracking-wide laptop:text-xl">
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
