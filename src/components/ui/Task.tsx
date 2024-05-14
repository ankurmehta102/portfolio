import Text from "./Text";

interface TaskProps {
  data: { taskHeading: string; taskDescription: string[]; taskImage?: string };
}

function Task({
  data: { taskHeading, taskDescription, taskImage },
}: TaskProps) {
  return (
    <div className=" mt-2">
      <ul className="list-inside list-disc  text-grey">
        {" "}
        <h1 className="text-xl font-bold text-white">{taskHeading}</h1>
        {taskDescription.map((listData) => (
          <Text liteText={true} className="leading-height-3">
            <li>{listData}</li>
          </Text>
        ))}
      </ul>
      {taskImage && <img src={taskImage} alt="" className=" w-full" />}
    </div>
  );
}

export default Task;
