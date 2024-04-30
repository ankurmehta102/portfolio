import admin from "/images/admin.png";
import orderManagement from "/images/order-management.png";
import Card from "./Card";
import Text from "./Text";

function Projects() {
  const cardDetails = [
    {
      projectTitle: "Admin Portal",
      description:
        "A tool to manage all the important operations of an e-commerce.",
      logo: admin,
    },
    {
      projectTitle: "Order Management System",
      description:
        "A tool to manage all the important operations of an e-commerce.",
      logo: orderManagement,
    },
    {
      projectTitle: "Admin Portal",
      description:
        "A tool to manage all the important operations of an e-commerce.",
      logo: admin,
    },
  ];
  return (
    <div className="flex w-full flex-col">
      <div className="w-full pl-3">
        <Text size="large">Projects</Text>
      </div>
      <div>
        {cardDetails.map((card) => (
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
