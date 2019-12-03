import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Story } from "../../types/types";
import { LinearProgress } from "@material-ui/core";

const GET_STORIES = gql`
  query {
    stories {
      id
      title
      description
    }
  }
`;

const StoryList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_STORIES);

  if (loading) return <LinearProgress />;
  if (error) {
    console.log(error);
    return <p>Error</p>;
  }

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
          {data.stories.map((story: Story) => (
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
