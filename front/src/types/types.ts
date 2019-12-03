export type User = {
  id: number;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
};

export type Story = {
  id?: number;
  title: string;
  description: string;
  storyPoints: number;
  releaseNumber: number;
  assignee?: User;
  author?: User;
  dateCreated: string;
  status: Status;
  tasks?: Task[];
};

export type Task = {
  id?: number;
  title: string;
  description: string;
  status: Status;
};

export type Notification = {
  message: string;
  to: string;
  level: NotificationLevel
}

export type Status = "new" | "wip" | "done" | "rejected" | "closed";

export const NotificationLevelInfo = 'info';
export const NotificationLevelWarn = 'warn';
export const NotificationLevelAlert = 'alert';

export type NotificationLevel = 'info' | 'warn' | 'alert';
