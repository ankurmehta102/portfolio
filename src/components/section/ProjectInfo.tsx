import Text from "../ui/Text";
import Heading from "../ui/Heading";

interface ProjectInfoProps {
  title: string;
  description: string;
}

function ProjectInfo({ title, description }: ProjectInfoProps) {
  return (
    <section id="project-info">
      <Heading variant="Heading">{title}</Heading>
      <Text liteText={true} className="mt-2 leading-height-3">
        {description}
      </Text>
    </section>
  );
}

export default ProjectInfo;
