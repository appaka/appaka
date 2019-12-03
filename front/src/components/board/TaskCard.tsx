import React from "react";
import { Task } from "../../types/types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import { useDrag } from "react-dnd";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const [, drag] = useDrag({
    item: { id: task.id, type: "task" }
  });
  return (
    <div ref={drag} style={{ margin: 5 }}>
      <Card style={{ width: "200px" }}>
        <CardContent>
          <Typography>{task.title}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskCard;
