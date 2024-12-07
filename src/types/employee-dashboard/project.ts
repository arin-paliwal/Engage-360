export interface WorkflowInterface {
  title: string;
  tasks: {
    name: string;
    completed: boolean;
    assignee: string;
    timestamp: string;
    actions: {
      action: string;
      employee: string;
      timestamp: string;
    }[];
  }[];
}

export interface ProjectInterface {
  id: string;
  name: string;
  description: string;
  lead: string;
  duration: string;
  timeNeeded: string;
  dateStarted: string;
  attachedFiles: {
    name: string;
    type: string;
  }[];
}
