import React from "react";
import { Story, Status } from "../../types/types";
import { TableCell } from "@material-ui/core";
import TaskCard from "./TaskCard";
import { useDrop } from "react-dnd";

interface TableCellDropableProps {
  story: Story;
  cellStatus: Status;
}

const TableCellDropable = ({ story, cellStatus }: TableCellDropableProps) => {
  const [{ isOver }, drop] = useDrop({
    accept: "task",
    drop(item, monitor) {
      // const didDrop = monitor.didDrop();
      // if (didDrop && !greedy) {
      //   return;
      // }
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });
  return (
    <TableCell ref={drop} style={{ backgroundColor: isOver ? "green" : "" }}>
      {story.tasks &&
        story.tasks
          .filter(task => task.status === cellStatus)
          .map(task => <TaskCard task={task} />)}
    </TableCell>
  );
};

export default TableCellDropable;
