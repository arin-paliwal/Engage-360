export interface TabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabId: string;
  icon: React.ReactNode;
  label: string;
}

export interface JobInterface {
  id: number;
  title: string;
  description: string;
  activeUntil: string;
  type: string[];
}
