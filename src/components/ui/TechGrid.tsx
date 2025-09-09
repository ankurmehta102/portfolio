import { IconType } from "react-icons";
import Text from "./Text";

interface TechGrid {
  gridData: { tech: string; icon: IconType }[];
}

function TechGrid({ gridData }: TechGrid) {
  return (
    <div className="mt-4 grid w-full grid-cols-3 gap-6">
      {gridData.map((data) => {
        return (
          <div
            className="flex items-center space-x-2 text-grey"
            key={data?.tech}
          >
            <data.icon size={21} />
            <Text liteText={true} className="">
              {data?.tech}
            </Text>
          </div>
        );
      })}
    </div>
  );
}

export default TechGrid;
