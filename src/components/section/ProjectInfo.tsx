import Text from "../ui/Text";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { motion } from "framer-motion";

interface ProjectInfoProps {
  title: string;
  description: string;
  link?: string;
}

function ProjectInfo({ title, description, link }: ProjectInfoProps) {
  const handleClick = () => {
    console.log("Github button clicked.");
    window.open(link, "_blank");
  };
  return (
    <motion.section
      id="project-info"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <Heading variant="Heading">{title}</Heading>
      <Text liteText={true} className="mt-2 leading-height-3">
        {description}
      </Text>
      {link && (
        <Button className="mt-2" onClick={handleClick}>
          Github
        </Button>
      )}
    </motion.section>
  );
}

export default ProjectInfo;
