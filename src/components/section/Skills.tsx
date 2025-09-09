import Heading from "../ui/Heading";
import { SkillsData } from "../../data";
import Text from "../ui/Text";

function Skills() {
  return (
    <section className="w-full">
      <Heading variant="SubHeading" className="">
        Technical Skills
      </Heading>
      <div className="mt-4 grid w-full grid-cols-3 gap-6">
        {SkillsData.map((data) => {
          return (
            <div
              className="flex items-center space-x-2 text-grey"
              key={data?.tech}
            >
              <data.icon size={21} />
              <Text liteText={true} className="">
                {data?.tech}
              </Text>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
