import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadData } from "../helper";

function useFetchData() {
  const [projectData, setProjectData] = useState<any>({});
  const projectId = useParams().projectId || "";

  const fetchData = async () => {
    const data = await loadData(projectId);
    setProjectData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [projectData] as const;
}

export default useFetchData;
