import { Link } from "react-router-dom";
import Text from "./Text";
import { MouseEvent, useRef } from "react";

interface CardProps {
  projectTitle: string;
  description: string;
  logo: string;
  path: string;
}

function Card({ projectTitle, description, logo, path }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      let x = e.pageX - cardRef.current.offsetLeft;
      let y = e.pageY - cardRef.current.offsetTop;
      cardRef.current.style.setProperty("--x", x + "px");
      cardRef.current.style.setProperty("--y", y + "px");
    }
  };
  return (
    <Link to={path}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={`relative mb-2  flex w-full  cursor-pointer items-center justify-between overflow-hidden rounded-md bg-[#131315]  px-3 py-3  before:absolute before:left-[var(--x)] before:top-[var(--y)] before:h-[350px]  before:w-[500px] before:translate-x-[-50%] before:translate-y-[-50%] before:bg-radial-gradient before:opacity-0 after:absolute after:inset-0.5 after:z-0 after:rounded-md after:opacity-70 after:transition before:hover:opacity-100 before:hover:transition before:hover:duration-500 after:hover:bg-[#131315] after:hover:duration-[250ms]`}
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
      className=" z-10 flex w-3/4 flex-col justify-center text-left"
    >
      <h1 className="text-md mb-1 font-bold text-white min-[380px]:text-xl">
        {projectTitle}
      </h1>
      <Text liteText={true} className="text-base">
        {description}
      </Text>
    </div>
  );
}

function LogoSection({ logo }: Pick<CardProps, "logo">) {
  return (
    <div id="image-section" className="z-10  flex  items-center justify-end  ">
      <div className=" h-28 w-28 ">
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
