import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadData } from "../helper";
import ReactGA from "react-ga4";

function useFetchData() {
  const [projectData, setProjectData] = useState<any>({});
  const [error, setError] = useState<boolean>(false);
  const projectId = useParams().projectId || "";

  const fetchData = async () => {
    try {
      const data = await loadData(projectId);
      setProjectData(data);
    } catch (error: any) {
      ReactGA.event({
        category: "Error",
        action: "loadData error",
        label: `${error?.message}`,
      });
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [projectData, projectId, error] as const;
}

export default useFetchData;
