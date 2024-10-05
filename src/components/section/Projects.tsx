import Card from "../ui/Card";
import Heading from "../ui/Heading";
import { CardDetails } from "../../data";

function Projects() {
  return (
    <div className="flex w-full flex-col">
      <div className="w-full">
        <Heading variant="SubHeading">Projects</Heading>
      </div>
      <div className="mt-2">
        {CardDetails.map((card) => (
          <Card
            key={card.id}
            projectTitle={card.projectTitle}
            description={card.description}
            logo={card.logo}
            path={card.path}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
