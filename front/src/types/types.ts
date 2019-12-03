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
  label: string;
  to: string;
  type: NotificationType
}

export type Status = "new" | "wip" | "done" | "rejected" | "closed";

export const NotificationTypeInfo = 'info';
export const NotificationTypeWarn = 'warn';
export const NotificationTypeAlert = 'alert';

export type NotificationType = 'info' | 'warn' | 'alert';
