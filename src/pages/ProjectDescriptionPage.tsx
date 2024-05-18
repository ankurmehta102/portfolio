import ProjectInfo from "../components/section/ProjectInfo";
import TaskSection from "../components/section/TaskSection";
import TechStack from "../components/section/TechStack";
import useFetchData from "../hooks/useFetchData";
import { TaskHeading } from "../types";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function ProjectDescriptionPage() {
  const [projectData] = useFetchData();
  const navigate = useNavigate();

  const taskSectionHeading = projectData.achievements
    ? TaskHeading.ACHIEVEMENTS
    : TaskHeading.FEATURES;
  const taskData = projectData.achievements || projectData.features;

  return (
    projectData.title && (
      <div className="px-3 ">
        <div className="pointer flex w-full cursor-pointer justify-end">
          <IoArrowBackCircle
            className="h-12 w-12 font-black text-grey"
            onClick={() => {
              navigate("/", { replace: true });
            }}
          />
        </div>
        <ProjectInfo
          title={projectData.title}
          description={projectData.description}
          link={projectData.link}
        />
        <TechStack techStack={projectData.techStack} />
        <TaskSection heading={taskSectionHeading} taskData={taskData} />
      </div>
    )
  );
}

export default ProjectDescriptionPage;
