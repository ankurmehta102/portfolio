import Text from "./Text";

interface CardProps {
  projectTitle: string;
  description: string;
  logo: string;
}

function Card({ projectTitle, description, logo }: CardProps) {
  return (
    <div
      className={`mb-6 flex w-full cursor-pointer items-center justify-between rounded-md p-2 transition-all hover:backdrop-brightness-200`}
    >
      <TextSection projectTitle={projectTitle} description={description} />
      <LogoSection logo={logo} />
    </div>
  );
}

function TextSection({
  projectTitle,
  description,
}: Pick<CardProps, "projectTitle" | "description">) {
  return (
    <div
      id="text-container"
      className=" flex  w-3/6  flex-col justify-center  p-1 text-left mobile:w-4/6"
    >
      <Text size="large">{projectTitle}</Text>
      <Text size="small" isLight={true}>
        {description}
      </Text>
    </div>
  );
}

function LogoSection({ logo }: Pick<CardProps, "logo">) {
  return (
    <div
      id="image-section"
      className="m-2 flex w-3/6 items-center justify-end mobile:w-2/6  "
    >
      <div className="h-24 w-24 laptop:h-28 laptop:w-28">
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
