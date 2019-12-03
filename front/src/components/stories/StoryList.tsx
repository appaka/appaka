import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import stories from "../../mocks/stories.mock";
import { Link } from "react-router-dom";

const StoryList: React.FC = () => {
  return (
    <div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>title</TableCell>
            <TableCell>description</TableCell>
            <TableCell>status</TableCell>
            <TableCell>story points</TableCell>
            <TableCell>edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stories.map(story => (
            <TableRow key={story.id}>
              <TableCell>{story.title}</TableCell>
              <TableCell>{story.description}</TableCell>
              <TableCell>{story.status}</TableCell>
              <TableCell>{story.storyPoints}</TableCell>
              <TableCell>
                <Link to={`/story/${story.id}`}>
                  <p>edit</p>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StoryList;
