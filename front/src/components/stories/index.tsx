import React from "react";
import Form from "./StoryForm";
import StoryList from "./StoryList";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const Stories: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <StoryList />
      <Link to="/story">
        <Fab className={classes.fab} color="primary">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};

export default Stories;
