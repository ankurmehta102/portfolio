import Task from "../ui/Task";
import Heading from "../ui/Heading";

interface TaskSectionProps {
  heading: string;
  taskData: any[];
}

function TaskSection({ heading, taskData }: TaskSectionProps) {
  return (
    <section id="task-section" className="mt-10">
      <Heading variant="SubHeading">{heading}</Heading>
      {taskData.map((data) => (
        <Task data={data} />
      ))}
    </section>
  );
}

export default TaskSection;
