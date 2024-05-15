import ProjectInfo from "../components/section/ProjectInfo";
import TaskSection from "../components/section/TaskSection";
import TechStack from "../components/section/TechStack";
import useFetchData from "../hooks/useFetchData";
import { TaskHeading } from "../types";

function ProjectDescriptionPage() {
  const [projectData] = useFetchData();

  const taskSectionHeading = projectData.achievements
    ? TaskHeading.ACHIEVEMENTS
    : TaskHeading.FEATURES;
  const taskData = projectData.achievements || projectData.features;

  return (
    projectData.title && (
      <div className="px-3">
        <ProjectInfo
          title={projectData.title}
          description={projectData.description}
        />
        <TechStack techStack={projectData.techStack} />
        <TaskSection heading={taskSectionHeading} taskData={taskData} />
      </div>
    )
  );
}

export default ProjectDescriptionPage;
