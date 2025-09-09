import { motion } from "framer-motion";
import Heading from "../ui/Heading";
import { IconType } from "react-icons";
import TechGrid from "../ui/TechGrid";

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
      <TechGrid gridData={techStack}></TechGrid>
    </motion.section>
  );
}

export default TechStack;
