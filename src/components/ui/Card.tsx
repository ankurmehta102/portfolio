import { Link } from "react-router-dom";
import Text from "./Text";

interface CardProps {
  projectTitle: string;
  description: string;
  logo: string;
  path: string;
}

function Card({ projectTitle, description, logo, path }: CardProps) {
  return (
    <Link to={path}>
      <div
        className={`mb-2  flex w-full cursor-pointer items-center justify-between rounded-md  py-1 pl-3 pr-2 transition-all hover:backdrop-brightness-200`}
      >
        <TextSection projectTitle={projectTitle} description={description} />
        <LogoSection logo={logo} />
      </div>
    </Link>
  );
}

function TextSection({
  projectTitle,
  description,
}: Pick<CardProps, "projectTitle" | "description">) {
  return (
    <div
      id="text-container"
      className=" flex  w-3/6  flex-col justify-center   text-left mobile:w-4/6"
    >
      <h1 className="mb-1 text-xl font-bold text-white">{projectTitle}</h1>
      <Text liteText={true}>{description}</Text>
    </div>
  );
}

function LogoSection({ logo }: Pick<CardProps, "logo">) {
  return (
    <div
      id="image-section"
      className="m-2 flex w-3/6 items-center justify-end mobile:w-2/6  "
    >
      <div className="h-18 w-18 laptop:h-28 laptop:w-28">
        <img
          src={logo}
          alt=""
          className="h-full w-full rounded-md object-fill"
        />
      </div>
    </div>
  );
}

export default Card;
