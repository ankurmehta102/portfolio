import Task from "../ui/Task";
import Heading from "../ui/Heading";
import { TaskHeading } from "../../types";

interface TaskSectionProps {
  heading: TaskHeading;
  taskData: any[];
}

function TaskSection({ heading, taskData }: TaskSectionProps) {
  return (
    <section id="task-section" className="mt-10">
      <Heading variant="SubHeading">{heading}</Heading>
      {taskData.map((data) => (
        <Task key={data.id} data={data} />
      ))}
    </section>
  );
}

export default TaskSection;
