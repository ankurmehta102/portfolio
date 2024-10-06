import Task from "../ui/Task";
import Heading from "../ui/Heading";
import { TaskHeading } from "../../types";
import { motion } from "framer-motion";

interface TaskSectionProps {
  heading: TaskHeading;
  taskData: any[];
}

function TaskSection({ heading, taskData }: TaskSectionProps) {
  return (
    <motion.section
      id="task-section"
      className=" space-y-6"
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
      {taskData.map((data) => (
        <Task key={data.id} data={data} />
      ))}
    </motion.section>
  );
}

export default TaskSection;
