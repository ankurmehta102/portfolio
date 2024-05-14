import Heading from "../ui/Heading";
import Text from "../ui/Text";

interface TechStackProps {
  techStack: string;
}

function TechStack({ techStack }: TechStackProps) {
  return (
    <section id="tech-stack" className="mt-10">
      <Heading variant="SubHeading">Tech Stack</Heading>
      <Text liteText={true} className="mt-2">
        {techStack}
      </Text>
    </section>
  );
}

export default TechStack;
