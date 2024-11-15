import { projectId } from "./types";

export const loadData = async (project: string) => {
  const data = await import("./data");
  if (project === projectId.admin) {
    return data.AdminPortalData;
  } else if (project === projectId.oms) {
    return data.orderManagementData;
  } else if (project === projectId.gallery) {
    return data.ImageGalleryData;
  } else {
    throw new Error("Invalid project type");
  }
};
