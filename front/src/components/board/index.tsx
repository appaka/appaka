import React from "react";
import stories from "../../mocks/stories.mock";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import StoryCard from "./StoryCard";
import { useDrop } from "react-dnd";
import TableCellDropable from "./TableCellDropable";
import { Story } from "../../types/types";

const BordPage = () => {
  return (
    <div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Story</TableCell>
            <TableCell>To do</TableCell>
            <TableCell>WIP</TableCell>
            <TableCell>Done</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stories.map(story => (
            <TableRow key={story.id}>
              <StoryCell story={story} />
              <TableCellDropable story={story} cellStatus="new" />
              <TableCellDropable story={story} cellStatus="wip" />
              <TableCellDropable story={story} cellStatus="done" />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const StoryCell = ({ story }: { story: Story }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "story",
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
      <StoryCard story={story} />
    </TableCell>
  );
};

export default BordPage;
