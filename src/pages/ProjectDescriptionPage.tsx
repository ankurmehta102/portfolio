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
  const [projectData] = useFetchData();
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
        className="px-3 "
      >
        <div className="pointer flex w-full cursor-pointer justify-end hover:brightness-90">
          <IoArrowBackCircle
            className="font-black text-grey"
            size={40}
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
      </motion.div>
    )
  );
}

export default ProjectDescriptionPage;
