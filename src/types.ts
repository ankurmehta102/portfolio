export enum projectId {
  admin = "admin-portal",
  oms = "order-management",
  gallery = "image-gallery",
}

export enum TaskHeading {
  ACHIEVEMENTS = "ACHIEVEMENTS",
  FEATURES = "FEATURES",
}

type TaskData = {
  taskHeading: string;
  taskDescription: string[];
  taskImage?: string;
};

type FeatureData = Pick<TaskData, "taskDescription" | "taskImage">;

export type ProjectDataType = {
  id: number;
  title: string;
  description: string;
  techStack: string;
  achievements?: TaskData[];
  features?: FeatureData[];
};
