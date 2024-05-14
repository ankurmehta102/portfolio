import Card from "../ui/Card";
import Heading from "../ui/Heading";
import { CardDetails } from "../../data";

function Projects() {
  return (
    <div className="mt-5 flex w-full flex-col ">
      <div className="w-full pl-3">
        <Heading variant="SubHeading" className="mb-2">
          Projects
        </Heading>
      </div>
      <div className="">
        {CardDetails.map((card) => (
          <Card
            projectTitle={card.projectTitle}
            description={card.description}
            logo={card.logo}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
