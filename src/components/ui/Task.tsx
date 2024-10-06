import Text from "./Text";

interface TaskProps {
  data: {
    taskDescription: string[];
    taskHeading?: string;
    taskImage?: string;
  };
}

function Task({
  data: { taskHeading, taskDescription, taskImage },
}: TaskProps) {
  return (
    <div className=" space-y-4 rounded bg-[#131315] p-4">
      {" "}
      {taskHeading ? (
        <>
          <h1 className=" text-2xl font-bold text-white">{taskHeading}</h1>
          <div className="space-y-6">
            <Text liteText={true} className="">
              <span className="font-extrabold text-white">
                Problem Statement:
              </span>{" "}
              {taskDescription[0]}
            </Text>
            <Text liteText={true} className="">
              <span className="font-extrabold text-white">Solution:</span>
              {taskDescription[1]}
            </Text>
          </div>
        </>
      ) : (
        <ul className="list-inside list-disc space-y-3 ">
          {taskDescription.map((listData) => (
            <Text liteText={true} className="leading-height-3">
              <li>{listData}</li>
            </Text>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Task;
