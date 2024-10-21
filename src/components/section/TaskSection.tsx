// import Task from "../ui/Task";
import Heading from "../ui/Heading";
import { TaskHeading } from "../../types";
import { motion } from "framer-motion";
import Text from "../ui/Text";
import { projectId } from "../../types";

interface TaskSectionProps {
  heading: TaskHeading;
  taskData: any[];
  Id: string;
}

function TaskSection({ heading, taskData, Id }: TaskSectionProps) {
  return (
    <motion.section
      id="task-section"
      className=" space-y-4"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.6 },
        },
      }}
    >
      <Heading variant="SubHeading">{heading}</Heading>
      <div className="space-y-8">
        {taskData.map((data) =>
          Id === projectId.admin ? (
            <Task key={data.id} data={data} />
          ) : (
            <Feature
              key={data.id}
              data={data}
              listStyle={Id === projectId.gallery}
            />
          ),
        )}
      </div>
    </motion.section>
  );
}

interface TaskProps {
  data: {
    taskDescription: string[];
    taskHeading?: string;
    taskImage?: string;
  };
  listStyle?: boolean;
}

const Feature = ({
  data: { taskHeading, taskDescription },
  listStyle,
}: TaskProps) => {
  return (
    <div className=" space-y-4 rounded border border-border bg-background-secondary p-4">
      {taskHeading && (
        <h1 className=" text-2xl font-bold text-white">{taskHeading}</h1>
      )}
      <ul
        className={`${listStyle && "list-outside  list-disc py-2 pl-4"} space-y-3`}
      >
        {taskDescription.map((listData) => (
          <Text liteText={true} className="leading-height-3">
            <li className={`text-balance`}>{listData}</li>
          </Text>
        ))}
      </ul>
    </div>
  );
};

function Task({ data: { taskHeading, taskDescription } }: TaskProps) {
  return (
    <div className=" space-y-4 rounded border border-border bg-background-secondary p-4">
      {" "}
      {taskHeading && (
        <h1 className=" text-2xl font-bold text-white">{taskHeading}</h1>
      )}
      <div className="space-y-6">
        <Text liteText={true} className="">
          <span className="font-extrabold text-white">Problem Statement:</span>{" "}
          {taskDescription[0]}
        </Text>
        <Text liteText={true} className="">
          <span className="font-extrabold text-white">Solution:</span>
          {taskDescription[1]}
        </Text>
      </div>
    </div>
  );
}

export default TaskSection;
