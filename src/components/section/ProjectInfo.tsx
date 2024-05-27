import Text from "../ui/Text";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

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
    <section id="project-info">
      <Heading variant="Heading">{title}</Heading>
      <Text liteText={true} className="mt-2 leading-height-3">
        {description}
      </Text>
      {link && (
        <Button className="mt-2" onClick={handleClick}>
          Github
        </Button>
      )}
    </section>
  );
}

export default ProjectInfo;
