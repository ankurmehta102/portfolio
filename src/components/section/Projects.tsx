import Card from "../ui/Card";
import Heading from "../ui/Heading";
import { CardDetails } from "../../data";

function Projects() {
  return (
    <div className=" mt-10 flex w-full flex-col">
      <div className="mb-4 w-full pl-3">
        <Heading variant="SubHeading">Projects</Heading>
      </div>
      <div className="px-1">
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
