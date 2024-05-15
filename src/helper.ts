import { projectId } from "./types";

export const loadData = async (project: string) => {
  if (project === projectId.admin) {
    const { AdminPortalData } = await import("./data");
    return AdminPortalData;
  } else if (project === projectId.oms) {
    const { orderManagementData } = await import("./data");
    return orderManagementData;
  } else if (project === projectId.gallery) {
    const { ImageGalleryData } = await import("./data");
    return ImageGalleryData;
  } else {
    throw new Error("Invalid project type");
  }
};
