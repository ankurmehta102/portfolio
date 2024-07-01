import Heading from "../ui/Heading";
import { SkillsData } from "../../data";

function Skills() {
  return (
    <section className="mb-3 mt-10 w-full ">
      <Heading variant="SubHeading" className="px-3">
        Technical Skills
      </Heading>
      <div
        id="skills-icons"
        className="mt-2 grid grid-cols-3  gap-2 px-2 laptop:px-1"
      >
        {SkillsData.map((skill) => {
          return (
            <div
              className={`${skill.className} flex cursor-default flex-col items-center justify-center rounded-md bg-[#131315]  py-6 text-grey`}
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
