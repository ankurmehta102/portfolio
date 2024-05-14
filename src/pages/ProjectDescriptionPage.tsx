import ProjectInfo from "../components/section/ProjectInfo";
import TaskSection from "../components/section/TaskSection";
import TechStack from "../components/section/TechStack";
import { AdminPortalData } from "../data";

function ProjectDescriptionPage() {
  const taskHeading = AdminPortalData.achievements
    ? "Achievements"
    : "Features";

  const taskData = AdminPortalData.achievements;
  return (
    <div className="px-3">
      <ProjectInfo
        title={AdminPortalData.title}
        description={AdminPortalData.description}
      />
      <TechStack techStack={AdminPortalData.techStack} />
      <TaskSection heading={taskHeading} taskData={taskData} />
    </div>
  );
}

export default ProjectDescriptionPage;
