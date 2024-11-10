import { motion } from "framer-motion";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import { IconType } from "react-icons";

interface TechStackProps {
  techStack: { tech: string; icon: IconType }[];
}

function TechStack({ techStack }: TechStackProps) {
  return (
    <motion.section
      id="tech-stack"
      className=""
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.3 },
        },
      }}
    >
      <Heading variant="SubHeading">Tech Stack</Heading>
      {/* <Text liteText={true} className="mt-2">
        {techStack}
      </Text> */}
      <div className="mt-4 grid grid-cols-3 gap-6 ">
        {techStack.map((data) => {
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
    </motion.section>
  );
}

export default TechStack;
