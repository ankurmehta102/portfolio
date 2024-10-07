import { useEffect } from "react";
import ProjectInfo from "../components/section/ProjectInfo";
import TaskSection from "../components/section/TaskSection";
import TechStack from "../components/section/TechStack";
import useFetchData from "../hooks/useFetchData";
import { TaskHeading } from "../types";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectDescriptionPage() {
  const [projectData, projectId] = useFetchData();
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const taskSectionHeading = projectData.achievements
    ? TaskHeading.ACHIEVEMENTS
    : TaskHeading.FEATURES;
  const taskData = projectData.achievements || projectData.features;

  return (
    projectData.title && (
      <motion.div className="space-y-10 px-3 ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.5, delay: 1 },
            },
          }}
          className="pointer flex w-full cursor-pointer justify-end hover:brightness-90"
        >
          <IoArrowBackCircle
            className="font-black text-grey"
            size={40}
            onClick={() => {
              navigate("/", { replace: true });
            }}
          />
        </motion.div>
        <ProjectInfo
          title={projectData.title}
          description={projectData.description}
          link={projectData.link}
        />
        <TechStack techStack={projectData.techStack} />
        <TaskSection
          heading={taskSectionHeading}
          taskData={taskData}
          Id={projectId}
        />
      </motion.div>
    )
  );
}

export default ProjectDescriptionPage;
